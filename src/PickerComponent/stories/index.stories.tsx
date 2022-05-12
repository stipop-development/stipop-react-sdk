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

export const CustomPicker = () => (
  <PickerComponent
    params={{
      apikey: process.env.API_KEY,
      userId: process.env.USER_ID,
    }}
    size={{
      width: 520,
      height: 600,
      imgSize: 60,
    }}
    border={{
      border: '2px solid black',
      radius: 10,
    }}
    backgroundColor="lightyellow"
    menu={{
      selectedLine: '3px solid white',
      backgroundColor: '#ededed',
      bottomLine: '2px solid black',
      height: 70,
      listCnt: 7,
    }}
    column={5}
    scroll={false}
    stickerClick={url => console.log(url)}
  />
)
