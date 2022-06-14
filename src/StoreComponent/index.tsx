import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon/index'
import LoadingSpinner from '../LoadingSpinner'

const StoreComponent: React.FC<StoreProps> = ({
  params,
  downloadParams,
  color,
  scroll,
  onClose,
  size,
  border,
  shadow,
}) => {
  const [packages, setPackages] = useState([])
  const [detail, setDetail] = useState(false)
  const [stickers, setStickers] = useState([])
  const [main, setMain] = useState(null)
  const [hideList, setHideList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(0)
  const [btnLoading, setBtnLoading] = useState(0)
  const [btnHover, setBtnHover] = useState(0)
  const [endPage, setEndPage] = useState(1)

  const [scrolling, setScrolling] = useState(0)

  const client = new (Stipop as any)(params.apikey, 'v1')
  const packInfo = new Array()

  useEffect(() => {
    setIsLoading(true)
    const trendingParams = {
      userId: params.userId,
      lang: params.lang,
      countryCode: params.countryCode,
      animated: params.animated,
      pageNumber: params.pageNumber,
      limit: params.limit ? params.limit : 20,
    }

    const data = client.getPack(trendingParams)

    data.then(({ body }) => {
      const PackageIds = body.packageList.map(pack => pack.packageId)
      PackageIds.filter((item, index) => PackageIds.indexOf(item) === index)

      // body.packageList.map(pack => {
      PackageIds.map(pack => {
        const packageParams = {
          userId: params.userId,
          packId: pack,
        }

        const packageData = client.getPackInfo(packageParams)
        packageData.then(({ body }) => {
          packInfo.push(body.package)
          if (packages.length === 0) {
            setPackages(packages.concat(packInfo))
          }
        })
      })
    })

    const hideParams = {
      userId: params.userId,
      limit: 50,
    }

    const hideData = client.myStickerHideList(hideParams)
    hideData.then(({ body }) => {
      setEndPage(body && body.pageMap ? body.pageMap.endPage : 1)
    })
  }, [])

  useEffect(() => {
    if (endPage > 1) {
      for (var i = 2; i <= endPage; i++) {
        const hideParams = {
          userId: params.userId,
          limit: 50,
          pageNumber: i,
        }
        const hideData = client.myStickerHideList(hideParams)
        hideData.then(({ body }) => {
          body && body.packageList
            ? body.packageList.map(pack => {
                setHideList(hideList => hideList.concat(pack.packageId))
              })
            : setHideList(hideList)
        })
      }
    } else {
      const hideParams = {
        userId: params.userId,
        limit: 50,
      }
      const hideData = client.myStickerHideList(hideParams)
      hideData.then(({ body }) => {
        body && body.packageList
          ? body.packageList.map(pack => {
              setHideList(hideList => hideList.concat(pack.packageId))
            })
          : setHideList(hideList)
      })
    }
  }, [endPage])

  useEffect(() => {
    if (packages && packages.length > 0) {
      if (params.limit) {
        if (packages.length >= params.limit) {
          setIsLoading(false)
        }
      } else {
        if (packages.length === 20) {
          setIsLoading(false)
        }
      }
    }
  }, [packages])

  const clickDownload = packageId => {
    setBtnLoading(packageId)
    const dParams = {
      userId: params.userId,
      packageId: packageId,
      isPurchase: downloadParams.isPurchase,
      price: downloadParams.price,
      lang: downloadParams.lang,
      countryCode: downloadParams.countryCode,
    }
    const data = client.download(dParams)
    data.then(() => {
      setTimeout(() => {
        setPackages(
          packages.map(pack => {
            if (pack.packageId === packageId) {
              pack.isDownload = 'Y'
            }
            return pack
          })
        )
        if (main) {
          setMain({
            packageId: main.packageId,
            packageImg: main.packageImg,
            packageName: main.packageName,
            artistName: main.artistName,
            isDownload: 'Y',
          })
        }
        setBtnLoading(0)
      }, 500)
    })
  }

  const clickHide = packageId => {
    setBtnLoading(packageId)
    const hideParams = {
      userId: params.userId,
      packageId: packageId,
    }

    const data = client.myStickerHide(hideParams)
    data.then(() => {
      setTimeout(() => {
        if (hideList.indexOf(packageId) < 0) {
          setHideList(hideList.concat(packageId))
        } else {
          setHideList(hideList.filter(item => item !== packageId))
          const myParams = {
            userId: params.userId,
          }
          const myData = client.mySticker(myParams)
          myData.then(({ body }) => {
            const firstOrder =
              body && body.packageList && body.packageList[0].order
            const currentOrder = body.packageList.filter(
              pack => pack.packageId === packageId
            )[0].order

            const orderParams = {
              userId: params.userId,
              currentOrder: currentOrder,
              newOrder: firstOrder + 1,
            }

            client.myStickerOrder(orderParams)
          })
        }
        setBtnLoading(0)
      }, 500)
    })
  }

  useEffect(() => {
    const pack = document.getElementById('package-wrapper')
    if (pack) {
      pack.scrollTo(0, currentScroll)
    }
  }, [isLoading])

  const clickDetail = async packageId => {
    await setIsLoading(true)
    await setStickers(
      packages.filter(pack => pack.packageId === packageId)[0].stickers
    )
    await setDetail(true)
    await setIsLoading(false)
  }

  const clickPrevious = async () => {
    await setDetail(false)
    const pack = document.getElementById('package-wrapper')
    await pack.scrollTo(0, currentScroll)
  }

  return (
    <>
      {isLoading ? (
        <StoreWrapper color={color} size={size} border={border} shadow={shadow}>
          <LoadingSpinner
            color={color && color.loadingColor ? color.loadingColor : '#ff4500'}
          />
        </StoreWrapper>
      ) : (
        <StoreWrapper color={color} size={size} border={border} shadow={shadow}>
          <StoreTitle>
            {detail ? (
              <div className="title-text">
                <PreviousBtn>
                  <Icon
                    type="PREVIOUS"
                    onClick={() => {
                      clickPrevious()
                    }}
                  />
                </PreviousBtn>
                <span>{params.lang ? params.lang === 'ko' ? '이모티콘 팩' : 'Sticker Pack' : 'Sticker Pack'}</span>
              </div>
            ) : (
              <div className="title-text">
                <span>{params.lang ? params.lang === 'ko' ? '이모티콘 스토어' : 'Sticker Store' : 'Sticker Store'}</span>
                <Icon type="STORE_BLACK" />
              </div>
            )}
            <CloseBtn onClick={() => onClose(true)}>
              <Icon type="CLOSE" />
            </CloseBtn>
          </StoreTitle>
          <PackageContainer
            detail={detail}
            color={color}
            scroll={scroll}
            border={border}
          >
            {detail ? (
              <DetailWrapper scroll={scroll}>
                <DetailBox>
                  <MainImg src={main.packageImg} alt="" />
                  <DetailName>
                    <div className="packageName">{main.packageName}</div>
                    <div className="artistName">©{main.artistName}</div>
                  </DetailName>
                  {btnLoading ? (
                    <DownloadBtn
                      style={{
                        right: '64px',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                      }}
                    >
                      <LoadingSpinner
                        color={
                          main.isDownload === 'Y' &&
                          hideList.indexOf(main.packageId) === -1
                            ? color && color.deleteBtn
                              ? color.deleteBtn
                              : '#b3b3b3'
                            : color && color.downloadBtn
                            ? color.downloadBtn
                            : '#ff4500'
                        }
                      />
                    </DownloadBtn>
                  ) : (
                    <DownloadBtn
                      color={color}
                      isDownload={main.isDownload === 'Y'}
                      isRecovery={
                        main.isDownload === 'Y' &&
                        hideList.indexOf(main.packageId) !== -1
                      }
                      style={{ right: '64px' }}
                      onClick={() => {
                        main.isDownload === 'Y'
                          ? clickHide(main.packageId)
                          : clickDownload(main.packageId)
                      }}
                    >
                      <Icon
                        type={
                          main.isDownload === 'Y'
                            ? hideList.indexOf(main.packageId) < 0
                              ? 'MINUS'
                              : 'PLUS'
                            : 'PLUS'
                        }
                      />
                    </DownloadBtn>
                  )}
                </DetailBox>
                <DetailStickerWrapper size={size} scroll={scroll} color={color}>
                  {stickers &&
                    stickers.map((sticker, index) => (
                      <img
                        src={`${sticker.stickerImg}?d=100x100`}
                        // src={sticker.stickerImg}
                        alt=""
                        key={index}
                      />
                    ))}
                </DetailStickerWrapper>
              </DetailWrapper>
            ) : packages && packages.length > 0 ? (
              <PackageWrapper
                id="package-wrapper"
                size={size}
                scroll={scroll}
                border={border}
                color={color}
                scrolling={scrolling}
                onScroll={e => setCurrentScroll(e.target.scrollTop)}
                onMouseEnter={() => setScrolling(1)}
                onMouseLeave={() => setScrolling(0)}
              >
                {packages.map((pack, index) => (
                  <PackageBox
                    key={index}
                    color={color}
                    size={size}
                    isDownload={pack.isDownload === 'Y'}
                    onClick={e => {
                      if (e.target.id !== 'download-btn') {
                        clickDetail(pack.packageId)
                        setMain({
                          packageId: pack.packageId,
                          packageImg: pack.packageImg,
                          packageName: pack.packageName,
                          artistName: pack.artistName,
                          isDownload: pack.isDownload,
                        })
                      }
                    }}
                  >
                    <PackageTitle>
                      {pack.packageName}
                      <span>©{pack.artistName}</span>
                    </PackageTitle>
                    <PackageItem>
                      {pack && pack.stickers ? (
                        pack.stickers.map((sticker, index) => {
                          if (index < 5) {
                            return (
                              <StickerWrapper key={index}>
                                <Sticker
                                  src={`${sticker.stickerImg}?d=100x100`}
                                  // src={sticker.stickerImg}
                                  alt=""
                                  size={size}
                                />
                              </StickerWrapper>
                            )
                          }
                        })
                      ) : (
                        <div></div>
                      )}
                    </PackageItem>
                    {btnLoading && btnLoading === pack.packageId ? (
                      <DownloadBtn
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                      >
                        <LoadingSpinner
                          color={
                            pack.isDownload === 'Y' &&
                            hideList.indexOf(pack.packageId) === -1
                              ? color && color.deleteBtn
                                ? color.deleteBtn
                                : '#b3b3b3'
                              : color && color.downloadBtn
                              ? color.downloadBtn
                              : '#ff4500'
                          }
                        />
                      </DownloadBtn>
                    ) : (
                      <DownloadBtn
                        color={color}
                        isDownload={pack.isDownload === 'Y'}
                        btnHover={btnHover === pack.packageId}
                        isRecovery={
                          pack.isDownload === 'Y' &&
                          hideList.indexOf(pack.packageId) !== -1
                        }
                      >
                        <Icon
                          type={
                            pack.isDownload === 'Y'
                              ? hideList.indexOf(pack.packageId) < 0
                                ? 'MINUS'
                                : 'PLUS'
                              : 'PLUS'
                          }
                        />
                      </DownloadBtn>
                    )}
                    <BtnWrapper
                      id="download-btn"
                      onMouseEnter={() => setBtnHover(pack.packageId)}
                      onMouseLeave={() => setBtnHover(0)}
                      onClick={() => {
                        pack.isDownload === 'Y'
                          ? clickHide(pack.packageId)
                          : clickDownload(pack.packageId)
                      }}
                    ></BtnWrapper>
                  </PackageBox>
                ))}
              </PackageWrapper>
            ) : (
              <div></div>
            )}
          </PackageContainer>
        </StoreWrapper>
      )}
    </>
  )
}

export default StoreComponent

const StoreWrapper = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '600px'};
  height: ${props =>
    props.size && props.size.height ? `${props.size.height}px` : '600px'};
  background-color: #fff;
  border: ${props =>
    props.border && props.border.border
      ? props.border.border
      : '1px solid lightgray'};
  border-top-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.leftTop || props.border.radius.leftTop === 0)
      ? `${props.border.radius.leftTop}px`
      : '8px'};
  border-top-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.rightTop || props.border.radius.rightTop === 0)
      ? `${props.border.radius.rightTop}px`
      : '8px'};
  border-bottom-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
      ? `${props.border.radius.leftBottom}px`
      : '8px'};
  border-bottom-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.rightBottom || props.border.radius.rightBottom === 0)
      ? `${props.border.radius.rightBottom}px`
      : '8px'};
  border-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0) &&
    `${props.border.radius.all}px`};
  box-shadow: ${props =>
    props.shadow ? props.shadow : '0 10px 20px 6px rgba(0, 0, 0, 0.1)'};
  background-color: ${props =>
    props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
`
const StoreTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;

  .title-text {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    span {
      margin-right: 10px;
    }
  }
`
const CloseBtn = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .stipop-icon {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
`
const PreviousBtn = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  .stipop-icon {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
`
const PackageContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
  /* border-bottom-left-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '8px'};
  border-bottom-right-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '8px'}; */
  border-bottom-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0)
      ? `${props.border.radius.all}px`
      : props.border &&
        props.border.radius &&
        (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
      ? `${props.border.radius.leftBottom}px`
      : '8px'};
  border-bottom-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0)
      ? `${props.border.radius.all}px`
      : props.border &&
        props.border.radius &&
        (props.border.radius.rightBottom ||
          props.border.radius.rightBottom === 0)
      ? `${props.border.radius.rightBottom}px`
      : '8px'};
`

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const DetailBox = styled.div`
  display: flex;
  padding: 0 68px 0 45px;
  align-items: center;
  position: relative;
  margin-bottom: 5%;
`
const MainImg = styled.img`
  width: ${props =>
    props.size && props.size.mainImg ? `${props.size.mainImg}px` : '100px'};
  margin-right: 12px;
`
const DetailName = styled.div`
  .packageName {
    font-size: 14px;
    font-weight: bold;
  }
  .artistName {
    font-size: 10px;
    color: #a9a9a9;
  }
`
const DetailStickerWrapper = styled.div`
  height: 100%;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 100px;
  justify-items: center;
  align-items: center;
  row-gap: 2%;
  overflow-y: auto;
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    /* background-color: ${props =>
      props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff'};
    border-bottom-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '8px'}; */
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
    &:hover {
      background: ${props =>
        props.color && props.color.scrollHover
          ? props.color.scrollHover
          : '#6d7072'};
    }
  }

  img {
    width: ${props =>
      props.size && props.size.detailImg ? `${props.size.detailImg}%` : '70%'};
    &:hover {
      transform: scale(1.3);
    }
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const PackageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: scroll;
  border-bottom-left-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '8px'};
  border-bottom-right-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '8px'};
  box-sizing: border-box;
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    /* display: ${props =>
      props.scroll === false ? 'none' : props.scrolling ? '' : 'none'}; */
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
    &:hover {
      background: ${props =>
        props.color && props.color.scrollHover
          ? props.color.scrollHover
          : '#6d7072'};
    }
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const PackageBox = styled.div`
  width: calc(100% - 64px);
  height: ${props =>
    props.size && props.size.packageListHeight
      ? `${props.size.packageListHeight}%`
      : '33%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 23px 0 32px;
  box-sizing: border-box;
  background-color: ${props =>
    props.isDownload
      ? props.color && props.color.downloadedColor
        ? props.color.downloadedColor
        : props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff'
      : props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
  border-bottom: 0.5px solid #e6e6e6;
  position: relative;

  &:hover {
    background-color: ${props =>
      props.isDownload
        ? props.color && props.color.downloadedHoverColor
          ? props.color.downloadedHoverColor
          : props.color && props.color.downloadedColor
          ? props.color.downloadedColor
          : '#f5f6f6'
        : props.color && props.color.packageHoverColor
        ? props.color.packageHoverColor
        : props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#f5f6f6'};
    cursor: pointer;
  }
`
const DownloadBtn = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props =>
    props.isDownload
      ? props.isRecovery
        ? props.btnHover
          ? props.color && props.color.recoveryBtnHover
            ? props.color.recoveryBtnHover
            : '#d13900'
          : props.color && props.color.recoveryBtn
          ? props.color.recoveryBtn
          : '#ff4500'
        : props.btnHover
        ? props.color && props.color.deleteBtnHover
          ? props.color.deleteBtnHover
          : '#a1a1a1'
        : props.color && props.color.deleteBtn
        ? props.color.deleteBtn
        : '#b3b3b3'
      : props.btnHover
      ? props.color && props.color.downloadBtnHover
        ? props.color.downloadBtnHover
        : '#d13900'
      : props.color && props.color.downloadBtn
      ? props.color.downloadBtn
      : '#ff4500'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;

  .stipop-icon {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.isDownload
        ? props.isRecovery
          ? props.color && props.color.recoveryBtnHover
            ? props.color.recoveryBtnHover
            : '#d13900'
          : props.color && props.color.deleteBtnHover
          ? props.color.deleteBtnHover
          : '#a1a1a1'
        : props.color && props.color.downloadBtnHover
        ? props.color.downloadBtnHover
        : '#d13900'};
  }
`
const BtnWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`

const PackageTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 5px;

  span {
    font-size: 12px;
    font-weight: normal;
    color: #a9a9a9;
    margin-left: 12px;
  }
`
const PackageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 50%;
  padding-left: 20px;
`
const StickerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Sticker = styled.img`
  width: ${props =>
    props.size && props.size.previewImg ? `${props.size.previewImg}%` : '75%'};
`
