import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ChattingComponent = () => {
  const [chatList, setChatList] = useState([])
  const [chat, setChat] = useState('')

  return (
    <ChattingWrapper>
      <ChatList>
        {chatList.map(chat => (
          <ChatWrapper>
            <span>Guest</span>
            <Chat>{chat}</Chat>
          </ChatWrapper>
        ))}
      </ChatList>
      <ChattingFrom>
        <ChattingInput
          placeholder="Type Message"
          onChange={e => setChat(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (e.target.value.length > 0) {
                setChatList(chatList.concat(e.target.value))
              }
              e.target.value = ''
              setChat('')
            }
          }}
        />
      </ChattingFrom>
    </ChattingWrapper>
  )
}

export default ChattingComponent

const ChattingWrapper = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: #f8f6fe;
  position: relative;
  padding: 10px;
`
const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  background-color: #fff;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
`
const ChattingFrom = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ChattingInput = styled.input`
  width: 95%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 15px;
  box-sizing: border-box;
`