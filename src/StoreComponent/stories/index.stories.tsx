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
      pageNumber: 1,
      limit: 100,
    }}
    downloadParams={{
      isPurchase: 'N',
    }}
    color={{
      backgroundColor: 'blue',
      downloadedColor: 'yellow',
      downloadBtn: 'yellow',
      downloadBtnHover: 'blue',
      deleteBtn: 'blue',
      deleteBtnHover: 'yellow',
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
    scroll={false}
  />
)
