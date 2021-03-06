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
    }}
    downloadParams={{
      isPurchase: 'N',
    }}
  />
)
