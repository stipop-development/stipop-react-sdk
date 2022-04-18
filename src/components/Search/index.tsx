import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { SearchProps } from './index.types'
import logo from '../../svgs/logo.svg'
import searchIcon from '../../svgs/search-icon.svg'

const SearchWrapper = styled.div`
  width: 360px;
  height: 300px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  position: relative;
`
const SearchForm = styled.form`
  width: 100%;
  height: 10%;
  max-height: 40px;
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  border: 2px solid lightgray;
  border-radius: 50px;
  padding: 0 35% 0 10%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
`
const InputHolder = styled.div`
  width: 90%;
  height: 100%;
  padding: 0 4%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 10px;
  color: #d5d5d5;

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
  width: 90%;
  height: 75%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 8%;
  justify-items: center;
`
const StickerImg = styled.img`
  width: 60%;
  height: auto;
`

const Search: React.FC<SearchProps> = ({
  apikey,
  userId,
  lang,
  pageNumber,
  limit,
}) => {
  const [keyword, setKeyword] = useState('')
  const [stickerList, setStickerList] = useState([])
  const baseURL = 'https://messenger.stipop.io/v1/search'

  useEffect(() => {
    let query = `?userId=${userId}&q=${keyword}`
    if (lang) {
      query += `&lang=${lang}`
    }
    if (pageNumber) {
      query += `&pageNumber=${pageNumber}`
    }
    if (limit) {
      query += `&limit=${limit}`
    }
    if (keyword) {
      axios
        .get(`${baseURL}${query}`, {
          headers: {
            apikey: apikey,
            'Content-Type': 'application/json',
          },
        })
        .then(({ data }) => {
          setStickerList(
            data.body.stickerList
              ? data.body.stickerList.map(sticker => sticker.stickerImg)
              : []
          )
        })
    }
  }, [keyword, lang, pageNumber, limit])

  return (
    <SearchWrapper>
      <SearchForm>
        <SearchInput type="text" onChange={e => setKeyword(e.target.value)} />
        <InputHolder>
          {/* <SearchIcon /> */}
          <img src={searchIcon} alt="" />
          <div>
            <span>POWERED BY</span>
            {/* <Logo /> */}
            <img src={logo} alt="" />
          </div>
        </InputHolder>
      </SearchForm>
      <StickerWrapper>
        {stickerList.length > 0 &&
          stickerList.map((sticker, index) => {
            return (
              <StickerImg
                src={sticker}
                alt=""
                key={index}
                onClick={() => {
                  console.log(sticker)
                }}
              />
            )
          })}
      </StickerWrapper>
    </SearchWrapper>
  )
}

export default Search
