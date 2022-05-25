import React from 'react'
import PickerComponent from '../index'

export default {
  title: 'PickerComponent',
}

export const Picker = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <PickerComponent
      params={{
        apikey: process.env.API_KEY,
        userId: process.env.USER_ID,
      }}
      stickerClick={url => console.log(url)}
    />
  </div>
)
