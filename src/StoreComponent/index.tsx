import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon/index'

const StoreComponent: React.FC<StoreProps> = ({
  params,
  downloadParams,
  color,
  scroll,
  onClose,
  size,
  border,
}) => {
  const [trendingStickers, setTrendingStickers] = useState([])
  const [packages, setPackages] = useState([])
  const [detail, setDetail] = useState(false)
  const [stickers, setStickers] = useState([])
  const [main, setMain] = useState(null)
  const [hideList, setHideList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const client = new (Stipop as any)(params.apikey, 'v1')

  useEffect(() => {
    const packInfo = new Array()

    const trendingParams = {
      userId: params.userId,
      lang: params.lang,
      countryCode: params.countryCode,
      animated: params.animated,
      pageNumber: params.pageNumber,
      limit: params.limit,
    }

    const data = client.getPack(trendingParams)

    data.then(({ body }) => {
      body.packageList.map(pack => {
        const packageParams = {
          userId: params.userId,
          packId: pack.packageId,
        }

        const packageData = client.getPackInfo(packageParams)
        packageData.then(({ body }) => {
          packInfo.push(body.package)
          setTrendingStickers([...trendingStickers, packInfo])
        })
      })
    })

    const hideParams = {
      userId: params.userId,
    }

    const hideData = client.myStickerHideList(hideParams)
    hideData.then(({ body }) => {
      // console.log(body.packageList)
      setHideList(body.packageList.map(pack => pack.packageId))
    })
  }, [detail])

  useEffect(() => {
    trendingStickers.map(trend => setPackages(trend))
    // console.log(packages)
    setIsLoading(false)
  }, [trendingStickers])

  const clickDownload = packageId => {
    const dParams = {
      userId: params.userId,
      packageId: packageId,
      isPurchase: downloadParams.isPurchase,
      price: downloadParams.price,
      lang: downloadParams.lang,
      countryCode: downloadParams.countryCode,
    }
    client.download(dParams)
  }

  const clickDetail = packageId => {
    const packageParams = {
      userId: params.userId,
      packId: packageId,
    }

    const packageData = client.getPackInfo(packageParams)
    packageData.then(({ body }) => {
      // console.log(body.package.stickers)
      setStickers(
        body && body.package && body.package.stickers
          ? body.package.stickers
          : []
      )
      setDetail(true)
    })
  }

  const clickDelete = packageId => {
    const deleteParams = {
      userId: params.userId,
      packageId: packageId,
    }

    client.myStickerHide(deleteParams)
  }

  return (
    <>
      {isLoading ? (
        <StoreWrapper></StoreWrapper>
      ) : (
        <StoreWrapper color={color} size={size} border={border}>
          <StoreTitle>
            {detail ? (
              <div className="title-text">
                <PreviousBtn>
                  <Icon type="PREVIOUS" onClick={() => setDetail(false)} />
                </PreviousBtn>
                <span>Sticker Pack</span>
              </div>
            ) : (
              <div className="title-text">
                <span>Sticker Store</span>
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
                  <DownloadBtn
                    color={color}
                    isDownload={main.isDownload === 'Y'}
                    isRecovery={
                      main.isDownload === 'Y' &&
                      hideList.indexOf(main.packageId) !== -1
                    }
                    onClick={() => {
                      main.isDownload === 'Y'
                        ? clickDelete(main.packageId)
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
                </DetailBox>
                <DetailStickerWrapper size={size}>
                  {stickers.map((sticker, index) => (
                    <img src={sticker.stickerImg} alt="" key={index} />
                  ))}
                </DetailStickerWrapper>
              </DetailWrapper>
            ) : packages && packages.length > 0 ? (
              <PackageWrapper>
                {packages.map((pack, index) => (
                  <PackageBox
                    key={index}
                    color={color}
                    isDownload={pack.isDownload === 'Y'}
                    onClick={() => {
                      clickDetail(pack.packageId)
                      setMain({
                        packageId: pack.packageId,
                        packageImg: pack.packageImg,
                        packageName: pack.packageName,
                        artistName: pack.artistName,
                        isDownload: pack.isDownload,
                      })
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
                                  src={sticker.stickerImg}
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
                    <DownloadBtn
                      color={color}
                      isDownload={pack.isDownload === 'Y'}
                      isRecovery={
                        pack.isDownload === 'Y' &&
                        hideList.indexOf(pack.packageId) !== -1
                      }
                      onClick={() => {
                        pack.isDownload === 'Y'
                          ? clickDelete(pack.packageId)
                          : clickDownload(pack.packageId)
                      }}
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
    props.size && props.size.height ? `${props.size.height}px` : '400px'};
  background-color: #fff;
  border: ${props =>
    props.border && props.border.border
      ? props.border.border
      : '1px solid lightgray'};
  border-radius: ${props =>
    props.border && props.border.radius ? `${props.border.radius}px` : '8px'};
  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props =>
    props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
`
const StoreTitle = styled.div`
  width: 100%;
  height: 25%;
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
  height: 75%;
  display: flex;
  flex-direction: column;
  overflow-y: ${props => (props.detail ? 'none' : 'auto')};
  background-color: ${props =>
    props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
  border-bottom-left-radius: ${props =>
    props.border && props.border.radius ? `${props.border.radius}px` : '8px'};
  border-bottom-right-radius: ${props =>
    props.border && props.border.radius ? `${props.border.radius}px` : '8px'};
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
  }
`
const DetailWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
  overflow-y: auto;
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
  }
`
const DetailBox = styled.div`
  display: flex;
  padding: 0 32px;
  margin-bottom: 15px;
  align-items: center;
  position: relative;
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
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 100px;
  justify-items: center;
  align-items: center;
  row-gap: 2%;

  img {
    width: ${props =>
      props.size && props.size.detailImg ? `${props.size.detailImg}%` : '70%'};
    &:hover {
      transform: scale(1.3);
    }
  }
`
const PackageWrapper = styled.div`
  width: 100%;
  height: 33%;
  display: block;
`
const PackageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  box-sizing: border-box;
  background-color: ${props =>
    props.isDownload
      ? props.color && props.color.downloadedColor
        ? props.color.downloadedColor
        : '#f5f6f6'
      : props.color && props.color.backgroundColor
      ? props.color.backgroundColor
      : '#fff'};
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
        : '#fff'};
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.1) inset;
    cursor: pointer;
  }
`
const DownloadBtn = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props =>
    props.isDownload
      ? props.isRecovery
        ? props.color && props.color.recoveryBtn
          ? props.color.recoveryBtn
          : '#ff4500'
        : props.color && props.color.deleteBtn
        ? props.color.deleteBtn
        : '#b3b3b3'
      : props.color && props.color.downloadBtn
      ? props.color.downloadBtn
      : '#ff4500'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;

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
            : '#ff4500'
          : props.color && props.color.deleteBtnHover
          ? props.color.deleteBtnHover
          : '#b3b3b3'
        : props.color && props.color.downloadBtnHover
        ? props.color.downloadBtnHover
        : '#ff4500'};
  }
`
const PackageTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;

  span {
    font-size: 10px;
    color: #a9a9a9;
    margin-left: 12px;
  }
`
const PackageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
`
const StickerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Sticker = styled.img`
  width: ${props =>
    props.size && props.size.previewImg ? `${props.size.previewImg}%` : '70%'};
`
