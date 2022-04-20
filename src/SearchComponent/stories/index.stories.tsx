import React from 'react'
import SearchComponent from '../index'

export default {
  title: 'SearchComponent',
}

export const Search = () => (
  <SearchComponent
    params={{
      apikey: '3bbe419e29e0e4728474e52a965154fb',
      userId: 'david@stipop.io',
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
      apikey: '3bbe419e29e0e4728474e52a965154fb',
      userId: 'david@stipop.io',
      lang: 'en',
      pageNumber: 1,
      limit: 50,
      default: 'rabbit',
    }}
    size={{
      width: 500,
      height: 600,
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
