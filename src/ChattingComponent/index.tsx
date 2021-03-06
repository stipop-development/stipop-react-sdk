import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { ChattingProps } from './index.types'

const ChattingComponent: React.FC<ChattingProps> = ({
  width,
  height,
  sticker,
}) => {
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    if (sticker) {
      setChatList(chatList.concat(sticker))
    }
  }, [sticker])

  useEffect(() => {
    const chat = document.querySelector('.chat-list')
    chat.scrollTop = chat.scrollHeight
  }, [chatList])

  return (
    <ChattingWrapper width={width} height={height} sticker={sticker}>
      <ChatList className="chat-list">
        {chatList.map(chat => (
          <ChatWrapper>
            <span>Guest</span>
            <Chat
              sticker={chat.startsWith('https://img.stipop.io') ? true : false}
            >
              {chat.startsWith('https://img.stipop.io') ? (
                <img src={chat} alt="" />
              ) : (
                chat
              )}
            </Chat>
          </ChatWrapper>
        ))}
      </ChatList>
      <ChattingFrom>
        <ChattingInput
          placeholder="Type Message"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (e.target.value.length > 0) {
                setChatList(chatList.concat(e.target.value))
              }
              e.target.value = ''
            }
          }}
        />
      </ChattingFrom>
    </ChattingWrapper>
  )
}

export default ChattingComponent

const ChattingWrapper = styled.div`
  width: ${props => (props.width ? `${props.width}px` : '80vw')};
  height: ${props => (props.height ? `${props.height}px` : '90vh')};
  background-color: #f8f6fe;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: calc(100% - 60px);
  overflow-y: auto;
`
const ChatWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5px;

  span {
    font-size: 12px;
    color: #696969;
    padding-right: 5px;
    margin-bottom: 2px;
  }
`
const Chat = styled.div`
  background-color: ${props => (props.sticker ? '' : '#fff')};
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
  word-break: break-all;
  font-size: 14px;

  img {
    width: 80px;
    height: 80px;
  }
`
const ChattingFrom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const ChattingInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 15px;
  box-sizing: border-box;
`
