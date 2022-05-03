import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import Stipop from 'stipop-js-sdk'

import { SearchProps } from './index.types'

import Icon from '../Icon/index'

const SearchComponent: React.FC<SearchProps> = ({
  params,
  size,
  backgroundColor,
  column,
  border,
  input,
  scroll,
  stickerClick,
}) => {
  const [keyword, setKeyword] = useState(params.default ? params.default : 'hi')
  const [stickerList, setStickerList] = useState([])
  // const baseUrl = 'https://messenger.stipop.io/v1/search'
  // const Stipop = require('stipop-js-sdk')
  const client = new (Stipop as any)(params.apikey, 'v1')

  // useEffect(() => {
  //   let query = `?userId=${params.userId}&q=${keyword}`
  //   if (params.lang) {
  //     query += `&lang=${params.lang}`
  //   }
  //   if (params.pageNumber) {
  //     query += `&pageNumber=${params.pageNumber}`
  //   }
  //   if (params.limit) {
  //     query += `&limit=${params.limit}`
  //   }
  //   if (keyword) {
  //     axios
  //       .get(`${baseUrl}${query}`, {
  //         headers: {
  //           apikey: params.apikey,
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //       .then(({ data }) => {
  //         setStickerList(
  //           data.body.stickerList
  //             ? data.body.stickerList.map(sticker => sticker.stickerImg)
  //             : []
  //         )
  //       })
  //   } else {
  //     setKeyword(params.default)
  //   }
  // }, [keyword, params.lang, params.pageNumber, params.limit])

  useEffect(() => {
    // console.log(keyword)
    const searchParams = {
      userId: params.userId,
      q: keyword,
      lang: params.lang,
      pageNumber: params.pageNumber,
      limit: params.limit,
    }

    if (keyword) {
      const data = client.getSearch(searchParams)

      data.then(({ body }) => {
        // console.log(body)
        setStickerList(
          body && body.stickerList
            ? body.stickerList.map(sticker => sticker.stickerImg)
            : []
        )
      })
    } else {
      setKeyword(params.default ? params.default : 'hi')
    }
  }, [keyword, params.lang, params.pageNumber, params.limit])

  return (
    <SearchWrapper
      size={size}
      backgroundColor={backgroundColor}
      border={border}
    >
      <SearchForm>
        <SearchInput
          type="text"
          onChange={e => setKeyword(e.target.value)}
          placeholder="Search sticker..."
          input={input}
        />
        <InputHolder input={input}>
          <Icon type="SEARCH" />
          <div>
            <span>POWERED BY</span>
            <Icon type="LOGO" />
          </div>
        </InputHolder>
      </SearchForm>
      {stickerList.length > 0 ? (
        <StickerWrapper
          column={column}
          scroll={scroll}
          border={border}
          backgroundColor={backgroundColor}
        >
          {stickerList.map((sticker, index) => (
            <StickerImg
              src={sticker}
              key={index}
              onClick={() => stickerClick(sticker)}
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
          <span className="no-sticker-text">No Stickers to Show</span>
        </NoSticker>
      )}
    </SearchWrapper>
  )
}

export default SearchComponent

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
  border-radius: ${props =>
    props.border && (props.border.radius || props.border.radius == 0)
      ? `${props.border.radius}px`
      : '10px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 15px 20px 20px 20px;
  box-sizing: border-box;
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
        ? `${
            Number(props.input.border.slice(0, 1)) + 1
          }${props.input.border.slice(1)}`
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

  .search-icon {
    width: 15px;
  }

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
  overflow-y: auto;
  display: grid;
  grid-template-columns: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  grid-template-rows: auto;
  row-gap: 8%;
  justify-items: center;
  box-sizing: border-box;
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : '#fff'};
    border-bottom-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '8px'};
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
