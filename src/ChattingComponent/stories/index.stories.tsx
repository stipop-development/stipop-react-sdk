import React from 'react'
import ChattingComponent from '../index'

export default {
  title: 'ChattingComponent',
}

export const Chatting = () => <ChattingComponent />
export const CustomChatting = () => (
  <ChattingComponent width={300} height={600} />
)
