import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Stipop from 'stipop-js-sdk'
import Icon from '../Icon/index'
import { FiX, FiSearch } from 'react-icons/fi'
import LoadingSpinner from '../LoadingSpinner'

import PickerComponent from '../PickerComponent'

import { UnifiedProps } from './index.types'

const UnifiedComponent: React.FC<UnifiedProps> = ({
  params,
  size,
  border,
  input,
  menu,
  backgroundColor,
  loadingColor,
  column,
  scroll,
  scrollHover,
  preview,
  stickerClick,
  storeClick,
  shadow,
}) => {
  const [keyword, setKeyword] = useState('')
  const [stickerList, setStickerList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [tempSticker, setTempSticker] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  const client = new (Stipop as any)(params.apikey, 'v1')

  useEffect(() => {
    setIsLoading(true)
    // console.log(keyword)
    const searchParams = {
      userId: params.userId,
      q: keyword,
      lang: params.lang ? params.lang : 'en',
      countryCode: params.countryCode ? params.countryCode : 'US',
      pageNumber: params.pageNumber ? params.pageNumber : 1,
      limit: params.limit ? params.limit : 20,
    }

    if (keyword) {
      const data = client.getSearch(searchParams)
      data.then(({ body }) => {
        // console.log(body)
        setStickerList(body && body.stickerList ? body.stickerList : [])
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      })
    } else {
      setKeyword('')
    }
  }, [keyword, params.lang, params.pageNumber, params.limit])

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
  }

  return (
    <SearchWrapper
      size={size}
      backgroundColor={backgroundColor}
      border={border}
      shadow={shadow}
    >
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
      <SearchForm>
        <SearchInput
          type="text"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={e => setKeyword(e.target.value)}
          placeholder={
            params.lang
              ? params.lang === 'ko'
                ? '이모티콘 검색...'
                : 'Search sticker...'
              : 'Search sticker...'
          }
          input={input}
        />
        <InputHolder input={input}>
          <FiSearch
            size={18}
            color={
              inputFocus
                ? input && input.focus
                  ? input.focus
                  : '#d5d5d5'
                : input && input.search
                ? input.search
                : '#d5d5d5'
            }
          />
          {/* <div>
            <span>POWERED BY</span>
            <Icon type="LOGO" />
          </div> */}
        </InputHolder>
      </SearchForm>
      {!keyword ? (
        <div style={{ height: '90%' }}>
          <PickerComponent
            params={{ apikey: params.apikey, userId: params.userId }}
            size={{
              height:
                size && size.height ? (size.height - 30) * 0.9 : 270 * 0.9,
              width:
                size && size.width
                  ? border && border.border
                    ? size.width - Number(border.border.slice(0, 1)) * 2
                    : size.width - 2
                  : border && border.border
                  ? 360 - Number(border.border.slice(0, 1)) * 2
                  : 358,
            }}
            border={{
              border: 'none',
              radius: {
                rightTop: 0,
                leftTop: 0,
                rightBottom:
                  border &&
                  border.radius &&
                  (border.radius.all || border.radius.all === 0)
                    ? border.radius.all
                    : border &&
                      border.radius &&
                      (border.radius.rightBottom ||
                        border.radius.rightBottom === 0)
                    ? border.radius.rightBottom
                    : 10,
                leftBottom:
                  border &&
                  border.radius &&
                  (border.radius.all || border.radius.all === 0)
                    ? border.radius.all
                    : border &&
                      border.radius &&
                      (border.radius.leftBottom ||
                        border.radius.leftBottom === 0)
                    ? border.radius.leftBottom
                    : 10,
              },
            }}
            menu={{
              backgroundColor:
                menu && menu.backgroundColor ? menu.backgroundColor : '#fff',
              bottomLine:
                menu && menu.bottomLine
                  ? menu.bottomLine
                  : '1px solid lightgray',
              selectedLine:
                menu && menu.selectedLine
                  ? menu.selectedLine
                  : '2px solid black',
              height: menu && menu.height ? menu.height : 45,
              listCnt: menu && menu.listCnt ? menu.listCnt : 6,
              arrowColor: menu && menu.arrowColor ? menu.arrowColor : '#000',
              imgSize: menu && menu.imgSize ? menu.imgSize : 25,
            }}
            backgroundColor={backgroundColor ? backgroundColor : '#fff'}
            column={column ? column : 4}
            scroll={scroll ? scroll : true}
            scrollHover={scrollHover ? scrollHover : '#6d7072'}
            loadingColor={loadingColor ? loadingColor : '#ff4500'}
            shadow={'none'}
            preview={preview}
            stickerClick={info => stickerClick(info)}
            storeClick={click => storeClick(click)}
          />
        </div>
      ) : !isLoading ? (
        stickerList.length > 0 ? (
          <StickerWrapper
            column={column}
            scroll={scroll}
            scrollHover={scrollHover}
            border={border}
            backgroundColor={backgroundColor}
            size={size}
          >
            {stickerList.map((sticker, index) => (
              <StickerImg
                src={`${sticker.stickerImg}?d=100x100`}
                key={index}
                onClick={() => {
                  stickerClick({
                    url: sticker.stickerImg,
                    stickerId: sticker.stickerId,
                    packageId: sticker.packageId,
                  })
                  clickSticker(sticker.stickerId)
                  setTempSticker(sticker.stickerImg)
                }}
                size={size}
              />
            ))}
          </StickerWrapper>
        ) : (
          <NoSticker>
            <img
              src="https://img.stipop.io/image/sdk/no-sticker.png"
              className="no-sticker"
            ></img>
            <span className="no-sticker-text">
              {params.lang
                ? params.lang === 'ko'
                  ? '검색 결과가 없습니다'
                  : 'No Stickers to Show'
                : 'No Stickers to Show'}
            </span>
          </NoSticker>
        )
      ) : (
        <NoSticker>
          <LoadingSpinner color={loadingColor ? loadingColor : '#ff4500'} />
        </NoSticker>
      )}
    </SearchWrapper>
  )
}

export default UnifiedComponent

const SearchWrapper = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '360px'};
  height: ${props =>
    props.size && props.size.height ? `${props.size.height}px` : '300px'};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  /* padding: 10px 0; */
  padding-top: 10px;
  box-sizing: border-box;
  box-shadow: ${props =>
    props.shadow ? props.shadow : '0 10px 20px 6px rgba(0, 0, 0, 0.1)'};
`
const SearchForm = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
const SearchInput = styled.input`
  width: ${props =>
    props.input && props.input.width
      ? `${props.input.width}%`
      : 'calc(100% - 20px)'};
  height: ${props =>
    props.input && props.input.height ? `${props.input.height}px` : '32px'};
  border: ${props =>
    props.input && props.input.border
      ? props.input.border
      : '2px solid lightgray'};
  border-radius: ${props =>
    props.input && (props.input.radius || props.input.radius == 0)
      ? `${props.input.radius}px`
      : '50px'};
  color: ${props =>
    props.input && props.input.color ? props.input.color : 'black'};
  padding: 0 140px 0 35px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
  position: absolute;

  &::placeholder {
    font-size: 13px;
    color: lightgray;
  }

  &:focus {
    outline: none;
    border: ${props =>
      props.input && props.input.border
        ? props.input.focus
          ? `${Number(props.input.border.slice(0, 1)) + 1}px ${
              props.input.border.split(' ')[1]
            } ${props.input.focus}`
          : `${Number(props.input.border.slice(0, 1)) + 1}px ${
              props.input.border.split(' ')[1]
            } ${props.input.border.split(' ')[2]}`
        : props.input && props.input.focus
        ? `3px solid ${props.input.focus}`
        : '3px solid lightgray'};
    box-sizing: border-box;
  }
`
const InputHolder = styled.div`
  width: ${props =>
    props.input && props.input.width
      ? `${props.input.width}%`
      : 'calc(100% - 20px)'};
  height: ${props =>
    props.input && props.input.height ? `${props.input.height}px` : '32px'};
  padding: 0 20px 0 12px;
  border-radius: ${props =>
    props.input && (props.input.radius || props.input.radius == 0)
      ? `${props.input.radius}px`
      : '50px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 10px;
  color: #d5d5d5;
  background-color: ${props =>
    props.input && props.input.backgroundColor
      ? props.input.backgroundColor
      : '#fff'};
  position: absolute;

  div {
    display: flex;
    align-items: center;

    span {
      margin-top: 2px;
      margin-right: 3px;
    }
  }
`
const StickerWrapper = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 5px;
  padding-left: 8px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  /* grid-template-rows: repeat(4, 1fr); */
  grid-template-rows: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  row-gap: 8%;
  justify-items: center;
  box-sizing: border-box;
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    /* background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : '#fff'};
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
        props.scrollHover ? props.scrollHover : '#6d7072'};
    }
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const NoSticker = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .no-sticker {
    width: 40%;
  }
  .no-sticker-text {
    font-size: 14px;
    color: #5f5f5f;
  }
`
const StickerImg = styled.img`
  width: ${props =>
    props.size && props.size.imgSize ? `${props.size.imgSize}%` : '60%'};
  height: auto;
  &:hover {
    cursor: pointer;
  }
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
