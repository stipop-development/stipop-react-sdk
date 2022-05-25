import React from 'react'
import SearchComponent from '../index'

export default {
  title: 'SearchComponent',
}

export const Search = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
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
  </div>
)
