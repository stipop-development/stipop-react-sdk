import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon'
import LoadingSpinner from '../LoadingSpinner'
import { request } from 'http'

const PickerComponent: React.FC<StoreProps> = ({
  params,
  size,
  border,
  backgroundColor,
  menu,
  column,
  scroll,
  stickerClick,
  storeClick,
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

  const client = new (Stipop as any)(params.apikey, 'v1')

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
      setItemCnt(body && body.packageList ? body.packageList.length : 0)
      setMyStickers(body && body.packageList ? body.packageList : [])
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
    const requestUrl = `https://messenger.stipop.io/v1/analytics/send/${stickerId}?userId=${params.userId}`
    fetch(requestUrl, {
      method: 'POST',
      headers: {
        apikey: params.apikey,
        'Content-Type': 'application/json',
      },
    })
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
    const requestUrl = `https://messenger.stipop.io/v1/package/send/${params.userId}?limit=50`
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
    // console.log(stickers)
    // console.log(recentView)
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

  // useEffect(() => {
  //   console.log(isLoading)
  // }, [isLoading])

  return (
    <PickerWrapper size={size} border={border}>
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
            <Icon type="RIGHT_ARROW_BLACK" />
          ) : (
            <Icon type="LEFT_ARROW" />
          )}
        </ArrowWrapper>
        <PickerMenu
          id="picker-menu"
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          onScroll={e => {
            setItemNum(
              Math.trunc(
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
          {myStickers.length > 0
            ? myStickers.map(
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
                        src={pack.packageImg}
                        show={showPackage === index}
                      />
                    </PackageImgWrapper>
                  )
              )
            : ''}
        </PickerMenu>
        <ArrowWrapper
          id={
            itemCnt - (menu && menu.listCnt ? menu.listCnt : 6) > itemNum
              ? 'right-black'
              : 'right'
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
          {itemCnt - (menu && menu.listCnt ? menu.listCnt : 6) > itemNum ? (
            <Icon type="RIGHT_ARROW_BLACK" />
          ) : (
            <Icon type="LEFT_ARROW" />
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
            isLoading={isLoading}
          >
            <LoadingSpinner />
          </StickerWrapper>
        ) : (
          <StickerWrapper
            backgroundColor={backgroundColor}
            border={border}
            column={column}
            scroll={scroll}
          >
            {stickers.map((sticker, index) => (
              <StickerImg
                size={size}
                src={sticker.stickerImg}
                alt=""
                key={index}
                onClick={() => {
                  stickerClick(sticker.stickerImg)
                  clickSticker(sticker.stickerId)
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
          isLoading={isLoading}
        >
          <LoadingSpinner />
        </StickerWrapper>
      ) : stickers.length > 0 ? (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          isLoading={isLoading}
        >
          {stickers.map((sticker, index) => (
            <StickerImg
              size={size}
              src={sticker.stickerImg}
              alt=""
              key={index}
              onClick={() => stickerClick(sticker.stickerImg)}
            />
          ))}
        </StickerWrapper>
      ) : (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
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
  &:hover {
    cursor: pointer;
  }
`
const PackageImg = styled.img`
  width: 60%;
  filter: ${props => (props.show ? '' : 'brightness(60%)')};
`
const StickerWrapper = styled.div`
  height: calc(100% - 45px);
  padding: 15px;
  display: ${props => (props.isLoading ? 'block' : 'grid')};
  grid-template-columns: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  row-gap: 8%;
  justify-items: center;
  overflow-y: auto;
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
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props =>
      props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff'};
    border-bottom-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '10px'};
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
    &:hover {
      background: #6d7072;
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
