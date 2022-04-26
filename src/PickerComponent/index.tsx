import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon'

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
  const client = new (Stipop as any)(params.apikey, 'v1')

  useEffect(() => {
    const storeParams = {
      userId: params.userId,
    }
    const data = client.mySticker(storeParams)

    data.then(({ body }) => {
      setMyStickers(body && body.packageList ? body.packageList : [])
      const packageParams = {
        userId: params.userId,
        packId: body.packageList[0].packageId,
      }

      const packageData = client.getPackInfo(packageParams)
      packageData.then(({ body }) => {
        setStickers(
          body && body.package && body.package.stickers
            ? body.package.stickers.map(sticker => sticker.stickerImg)
            : []
        )
      })
    })
  }, [])

  const clickPackage = packageId => {
    const packageParams = {
      userId: params.userId,
      packId: packageId,
    }

    const data = client.getPackInfo(packageParams)

    data.then(({ body }) => {
      setStickers(
        body && body.package && body.package.stickers
          ? body.package.stickers.map(sticker => sticker.stickerImg)
          : []
      )
    })
  }

  return (
    <StoreWrapper size={size} border={border}>
      <StoreMenu backgroundColor={backgroundColor} border={border} menu={menu}>
        <Icon type="TIME" />
        <Icon type="STORE" onClick={() => storeClick(true)} />
        {myStickers.length > 0 ? (
          myStickers.map(
            (pack, index) =>
              pack.packageId && (
                <PackageImgWrapper
                  menu={menu}
                  key={index}
                  onClick={() => {
                    clickPackage(pack.packageId)
                    setShowPackage(index)
                  }}
                  show={showPackage === index}
                >
                  <PackageImg src={pack.packageImg} />
                </PackageImgWrapper>
              )
          )
        ) : (
          <div></div>
        )}
      </StoreMenu>
      {stickers && (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
        >
          {stickers.map((sticker, index) => (
            <StickerImg
              src={sticker}
              alt=""
              key={index}
              onClick={() => stickerClick(sticker)}
            />
          ))}
        </StickerWrapper>
      )}
    </StoreWrapper>
  )
}

export default PickerComponent

const StoreWrapper = styled.div`
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
`
const StoreMenu = styled.div`
  height: 45px;
  border-bottom: ${props =>
    props.menu && props.menu.bottomLine
      ? props.menu.bottomLine
      : '1px solid lightgray'};
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};
  border-top-left-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  border-top-right-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  padding: 0 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  .stipop-icon {
    height: 90%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
  }
`
const PackageImgWrapper = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: ${props =>
    props.show
      ? props.menu && props.menu.selectedLine
        ? props.menu.selectedLine
        : '2px solid black'
      : ''};
`
const PackageImg = styled.img`
  height: 65%;
  cursor: pointer;
`
const StickerWrapper = styled.div`
  height: calc(100% - 45px);
  padding: 15px;
  display: grid;
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
  }
`
const StickerImg = styled.img`
  width: 70%;
  cursor: pointer;
`
