import React from 'react'
import StoreComponent from '../index'

export default {
  title: 'StoreComponent',
}

export const Store = () => (
  <StoreComponent
    params={{
      apikey: '3bbe419e29e0e4728474e52a965154fb',
      userId: 'david@stipop.io',
      lang: 'en',
      pageNumber: 2,
      limit: 50,
    }}
    downloadParams={{
      isPurchase: 'N',
    }}
    scroll={true}
  />
)

export const CustomStore = () => (
  <StoreComponent
    params={{
      apikey: '3bbe419e29e0e4728474e52a965154fb',
      userId: 'david@stipop.io',
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
    }}
    border={{
      radius: 20,
      border: '2px solid black',
    }}
    // scroll={false}
  />
)
