import React from 'react'
import SearchComponent from '../index'

export default {
  title: 'SearchComponent',
}

export const Search = () => (
  <SearchComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
      lang: 'en',
      pageNumber: 1,
      limit: 100,
    }}
    stickerClick={sticker => console.log(sticker)}
  />
)

export const CustomSearch = () => (
  <SearchComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
      lang: 'en',
      pageNumber: 1,
      limit: 50,
      default: 'rabbit',
    }}
    size={{
      width: 500,
      height: 700,
      imgSize: 80,
    }}
    backgroundColor="skyblue"
    column={5}
    border={{ border: '1px solid red', radius: 0 }}
    input={{
      border: '2px solid blue',
      radius: 0,
      backgroundColor: 'black',
      color: 'white',
      height: 50,
      width: 60,
    }}
    stickerClick={sticker => console.log(sticker)}
  />
)
