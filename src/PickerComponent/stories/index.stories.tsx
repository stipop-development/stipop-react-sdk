import React from 'react'
import PickerComponent from '../index'

export default {
  title: 'PickerComponent',
}

export const Picker = () => (
  <PickerComponent
    params={{
      apikey: '3bbe419e29e0e4728474e52a965154fb',
      userId: 'david@stipop.io',
    }}
    size={{
      width: 500,
      height: 400,
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
    }}
    column={5}
    scroll={false}
    stickerClick={sticker => console.log(sticker)}
  />
)
