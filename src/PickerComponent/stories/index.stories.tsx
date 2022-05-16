import React from 'react'
import PickerComponent from '../index'

export default {
  title: 'PickerComponent',
}

export const Picker = () => (
  <PickerComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
    }}
    stickerClick={url => console.log(url)}
  />
)
