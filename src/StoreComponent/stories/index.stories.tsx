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
  />
)
