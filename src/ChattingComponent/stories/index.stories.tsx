import React from 'react'
import ChattingComponent from '../index'

export default {
  title: 'ChattingComponent',
}

export const Chatting = () => <ChattingComponent />
export const CustomChatting = () => (
  <ChattingComponent
    width={400}
    height={600}
    sticker={'https://img.stipop.io/2020/11/22/1606019666828_01.gif'}
  />
)
