import React from 'react'
import StoreComponent from '../index'

export default {
  title: 'StoreComponent',
}

export const Store = () => (
  <StoreComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
      lang: 'en',
      pageNumber: 10,
      limit: 50,
    }}
    downloadParams={{
      isPurchase: 'N',
    }}
    scroll={true}
    size={{ packageListHeight: 33 }}
  />
)

export const CustomStore = () => (
  <StoreComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
      lang: 'en',
      limit: 20,
      pageNumber: 5,
    }}
    downloadParams={{
      isPurchase: 'N',
    }}
    color={{
      backgroundColor: 'blue',
      downloadedColor: 'yellow',
      downloadBtn: '#ff4500',
      downloadBtnHover: 'blue',
      deleteBtn: 'blue',
      deleteBtnHover: '#ff4500',
      recoveryBtnHover: 'blue',
      packageHoverColor: 'black',
    }}
    size={{
      detailImg: 70,
      previewImg: 60,
      width: 500,
      height: 350,
      packageListHeight: 25,
    }}
    border={{
      radius: 20,
      border: '2px solid black',
    }}
    // scroll={false}
  />
)
