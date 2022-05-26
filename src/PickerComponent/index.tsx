import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import _ from 'lodash'

import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon'
import LoadingSpinner from '../LoadingSpinner'
import { FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const PickerComponent: React.FC<StoreProps> = ({
  params,
  size,
  border,
  backgroundColor,
  menu,
  column,
  scroll,
  scrollHover,
  stickerClick,
  storeClick,
  preview,
}) => {
  const [myStickers, setMyStickers] = useState([])
  const [stickers, setStickers] = useState([])
  const [showPackage, setShowPackage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [recentView, setRecentView] = useState(false)

  const [itemCnt, setItemCnt] = useState(0)
  const [itemNum, setItemNum] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const menuList = document.getElementById('picker-menu')
  const [scrolling, setScrolling] = useState(0)
  const [tempSticker, setTempSticker] = useState('')

  const client = new (Stipop as any)(params.apikey, 'v1')

  const dummies = []
  _.times(
    menu && menu.listCnt ? menu.listCnt - (2 + itemCnt) : 6 - (2 + itemCnt),
    n => dummies.push({ index: n.toString(36) })
  )

  const itemWidth =
    size && size.width
      ? menu && menu.listCnt
        ? size.width / (menu.listCnt + 2)
        : size.width / 6
      : menu && menu.listCnt
      ? 360 / (menu.listCnt + 2)
      : 45

  useEffect(() => {
    const storeParams = {
      userId: params.userId,
    }
    const data = client.mySticker(storeParams)

    data.then(({ body }) => {
      setItemCnt(
        body && body.packageList
          ? body.packageList.filter(pack => pack.packageId !== null).length
          : 0
      )
      setMyStickers(
        body && body.packageList
          ? body.packageList.filter(pack => pack.packageId !== null)
          : []
      )

      if (body.packageList.filter(pack => pack.packageId !== null).length > 0) {
        const packageParams = {
          userId: params.userId,
          packId: body.packageList[0].packageId,
        }

        const packageData = client.getPackInfo(packageParams)
        packageData.then(({ body }) => {
          setStickers(
            body && body.package && body.package.stickers
              ? body.package.stickers
              : []
          )
        })
      } else {
        setShowPackage(-1)
        clickTime()
      }
    })
  }, [])

  const clickPackage = async packageId => {
    await setIsLoading(true)
    await setRecentView(false)
    const packageParams = {
      userId: params.userId,
      packId: packageId,
    }

    const data = client.getPackInfo(packageParams)

    await data.then(({ body }) => {
      setStickers(
        body && body.package && body.package.stickers
          ? body.package.stickers
          : []
      )
    })
  }

  const clickSticker = stickerId => {
    if (!preview) {
      const requestUrl = `https://messenger.stipop.io/v1/analytics/send/${stickerId}?userId=${params.userId}`
      fetch(requestUrl, {
        method: 'POST',
        headers: {
          apikey: params.apikey,
          'Content-Type': 'application/json',
        },
      })
    }
    // axios
    //   .post(requestUrl, {
    //     headers: {
    //       apikey: params.apikey,
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.data.headers)
    //   })
  }
  const clickTime = () => {
    setIsLoading(true)
    const requestUrl = `https://messenger.stipop.io/v1/package/send/${params.userId}?limit=28`
    axios
      .get(requestUrl, {
        headers: {
          apikey: params.apikey,
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => {
        // console.log(data.body.stickerList)
        setRecentView(true)
        setStickers(
          data && data.body && data.body.stickerList
            ? data.body.stickerList
            : []
        )
      })
  }

  useEffect(() => {
    if (stickers && stickers.length > 0) {
      setIsLoading(false)
    } else {
      if (recentView) {
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    }
  }, [stickers])

  return (
    <PickerWrapper size={size} border={border}>
      {preview && tempSticker && (
        <PreviewWrapper>
          <FiX
            size={25}
            color={'#000'}
            style={{
              position: 'absolute',
              right: '15px',
              top: '15px',
              cursor: 'pointer',
            }}
            onClick={() => {
              setTempSticker('')
            }}
          />
          <ChatSticker src={tempSticker} />
        </PreviewWrapper>
      )}
      <MenuBox>
        <ArrowWrapper
          id={itemNum ? 'left-black' : 'left'}
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onClick={() => {
            menuList.scrollTo(
              scrollX -
                (menu && menu.listCnt
                  ? itemWidth * menu.listCnt
                  : itemWidth * 6),
              0
            )
          }}
        >
          {itemNum ? (
            <FiChevronLeft
              size={30}
              color={menu && menu.arrowColor ? menu.arrowColor : '#000'}
            />
          ) : (
            <FiChevronLeft size={30} color={'#c1c1c1'} />
          )}
        </ArrowWrapper>
        <PickerMenu
          id="picker-menu"
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onScroll={e => {
            setItemNum(
              Math.round(
                e.target.scrollLeft /
                  (size && size.width
                    ? menu && menu.listCnt
                      ? size.width / (menu.listCnt + 2)
                      : size.width / 6
                    : menu && menu.listCnt
                    ? 360 / (menu.listCnt + 2)
                    : 45)
              )
            )
            setScrollX(e.target.scrollLeft)
          }}
        >
          <IconWrapper
            backgroundColor={backgroundColor}
            border={border}
            menu={menu}
            size={size}
            onClick={() => {
              clickTime()
              setShowPackage(-1)
            }}
            show={showPackage === -1}
          >
            <Icon type="TIME" />
          </IconWrapper>
          <IconWrapper
            backgroundColor={backgroundColor}
            border={border}
            menu={menu}
            size={size}
          >
            <Icon type="STORE" onClick={() => storeClick(true)} />
          </IconWrapper>
          {myStickers.length > 0 ? (
            myStickers.length >
            (menu && menu.listCnt ? menu.listCnt - 2 : 4) ? (
              myStickers.map(
                (pack, index) =>
                  pack.packageId && (
                    <PackageImgWrapper
                      menu={menu}
                      size={size}
                      key={index}
                      onClick={() => {
                        clickPackage(pack.packageId)
                        setShowPackage(index)
                      }}
                      show={showPackage === index}
                    >
                      <PackageImg
                        src={`${pack.packageImg}?d=100x100`}
                        show={showPackage === index}
                      />
                    </PackageImgWrapper>
                  )
              )
            ) : (
              <>
                {myStickers.map(
                  (pack, index) =>
                    pack.packageId && (
                      <PackageImgWrapper
                        menu={menu}
                        size={size}
                        key={index}
                        onClick={() => {
                          clickPackage(pack.packageId)
                          setShowPackage(index)
                        }}
                        show={showPackage === index}
                      >
                        <PackageImg
                          src={`${pack.packageImg}?d=100x100`}
                          show={showPackage === index}
                        />
                      </PackageImgWrapper>
                    )
                )}
                {dummies.map((item, index) => (
                  <PackageImgWrapper
                    id="dummies"
                    menu={menu}
                    size={size}
                    key={index}
                  ></PackageImgWrapper>
                ))}
              </>
            )
          ) : (
            dummies.map((item, index) => (
              <PackageImgWrapper
                id="dummies"
                menu={menu}
                size={size}
                key={index}
              ></PackageImgWrapper>
            ))
          )}
        </PickerMenu>
        <ArrowWrapper
          id={
            itemCnt - (menu && menu.listCnt ? menu.listCnt - 2 : 4) <= itemNum
              ? 'right'
              : 'right-black'
          }
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onClick={() => {
            menuList.scrollTo(
              scrollX +
                (menu && menu.listCnt
                  ? itemWidth * menu.listCnt
                  : itemWidth * 6),
              0
            )
          }}
        >
          {itemCnt - (menu && menu.listCnt ? menu.listCnt - 2 : 4) <=
          itemNum ? (
            <FiChevronRight size={30} color={'#c1c1c1'} />
          ) : (
            <FiChevronRight
              size={30}
              color={menu && menu.arrowColor ? menu.arrowColor : '#000'}
            />
          )}
        </ArrowWrapper>
      </MenuBox>
      {!recentView ? (
        stickers && isLoading ? (
          <StickerWrapper
            backgroundColor={backgroundColor}
            border={border}
            column={column}
            scroll={scroll}
            scrollHover={scrollHover}
            size={size}
            isLoading={isLoading}
          >
            <LoadingSpinner
              color={backgroundColor ? backgroundColor : '#ff4500'}
            />
          </StickerWrapper>
        ) : (
          <StickerWrapper
            id="sticker-wrapper"
            backgroundColor={backgroundColor}
            border={border}
            column={column}
            scroll={scroll}
            scrollHover={scrollHover}
            scrolling={scrolling}
            // onScroll={e => setCurrentScrollTop(e.target.scrollTop)}
            onMouseEnter={() => setScrolling(1)}
            onMouseLeave={() => setScrolling(0)}
          >
            {stickers.map((sticker, index) => (
              <StickerImg
                size={size}
                src={`${sticker.stickerImg}?d=100x100`}
                alt=""
                key={index}
                onClick={() => {
                  if (preview) {
                    stickerClick({
                      url: sticker.stickerImg,
                      id: sticker.stickerId,
                    })
                  } else {
                    stickerClick(sticker.stickerImg)
                  }
                  clickSticker(sticker.stickerId)
                  setTempSticker(sticker.stickerImg)
                }}
              />
            ))}
          </StickerWrapper>
        )
      ) : isLoading ? (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={isLoading}
        >
          <LoadingSpinner
            color={backgroundColor ? backgroundColor : '#ff4500'}
          />
        </StickerWrapper>
      ) : stickers.length > 0 ? (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={isLoading}
          onMouseEnter={() => setScrolling(1)}
          onMouseLeave={() => setScrolling(0)}
        >
          {stickers.map((sticker, index) => (
            <StickerImg
              size={size}
              src={`${sticker.stickerImg}?d=100x100`}
              alt=""
              key={index}
              onClick={() => {
                if (preview) {
                  stickerClick({
                    url: sticker.stickerImg,
                    id: sticker.stickerId,
                  })
                } else {
                  stickerClick(sticker.stickerImg)
                }
                setTempSticker(sticker.stickerImg)
              }}
            />
          ))}
        </StickerWrapper>
      ) : (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={recentView}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://img.stipop.io/image/sdk/no-sticker.png"
              className="no-sticker"
              style={{ width: '40%' }}
            ></img>
          </div>
        </StickerWrapper>
      )}
    </PickerWrapper>
  )
}

export default PickerComponent

const PickerWrapper = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '360px'};
  height: ${props =>
    props.size && props.size.height ? `${props.size.height}px` : '300px'};
  border: ${props =>
    props.border && props.border.border
      ? props.border.border
      : '1px solid lightgray'};
  border-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`
const MenuBox = styled.div`
  width: 100%;
  display: flex;
`
const ArrowWrapper = styled.div`
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 6}`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}`
      : '45px'};
  flex-shrink: 0;
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};
  border-top-left-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  border-bottom: ${props =>
    props.menu && props.menu.bottomLine
      ? props.menu.bottomLine
      : '1px solid lightgray'};
  box-sizing: border-box;
  cursor: pointer;

  .stipop-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &#left {
    padding-left: 10px;
    cursor: initial;
  }
  &#left-black {
    padding-left: 10px;
    .stipop-icon {
      transform: rotateY(180deg);
    }
  }
  &#right-black {
    padding-right: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '10px'};
  }
  &#right {
    padding-right: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '10px'};
    cursor: initial;

    .stipop-icon {
      transform: rotateY(180deg);
    }
  }
`
const IconWrapper = styled.div`
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 6}`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}`
      : '45px'};
  flex-shrink: 0;
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};

  .stipop-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: ${props =>
      props.show
        ? props.menu && props.menu.selectedLine
          ? props.menu.selectedLine
          : '2px solid black'
        : props.menu && props.menu.bottomLine
        ? props.menu.bottomLine
        : '1px solid lightgray'};
    box-sizing: border-box;
  }
`
const PickerMenu = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '360px'};
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const PackageImgWrapper = styled.div`
  /* flex-basis: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'}; */
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 6}`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}`
      : '45px'};
  flex-shrink: 0;
  height: 100%;
  /* padding: 0 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    props.show
      ? props.menu && props.menu.selectedLine
        ? props.menu.selectedLine
        : '2px solid black'
      : props.menu && props.menu.bottomLine
      ? props.menu.bottomLine
      : '1px solid lightgray'};
  box-sizing: border-box;
  cursor: pointer;

  &#dummies {
    cursor: initial;
  }
`
const PackageImg = styled.img`
  width: 60%;
  filter: ${props => (props.show ? '' : 'saturate(0%)')};
`
const StickerWrapper = styled.div`
  height: calc(100% - 45px);
  padding: 15px;
  display: ${props => (props.isLoading ? 'block' : 'grid')};
  grid-template-columns: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  grid-template-rows: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  row-gap: 8%;
  justify-items: center;
  overflow-y: scroll;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  border-bottom-left-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  border-bottom-right-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    /* display: ${props =>
      props.scroll === false ? 'none' : props.scrolling ? '' : 'none'}; */
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    /* background-color: ${props =>
      props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff'};
    border-bottom-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '10px'}; */
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
    &:hover {
      background: ${props =>
        props.scrollHover ? props.scrollHover : '#6d7072'};
    }
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const StickerImg = styled.img`
  width: ${props =>
    props.size && props.size.imgSize ? `${props.size.imgSize}%` : '70%'};
  cursor: pointer;
`
const PreviewWrapper = styled.div`
  width: 60%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-left: 40%;
  margin-bottom: 5px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100%;
`
const ChatSticker = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`
