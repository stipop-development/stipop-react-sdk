import React from 'react'
import styled from 'styled-components'
import { spinnerProps } from './index.types'

const LoadingSpinner: React.FC<spinnerProps> = ({ color, size, border }) => {
  return (
    <SpinnerContainer>
      <Spinner color={color} size={size} border={border}></Spinner>
    </SpinnerContainer>
  )
}

export default LoadingSpinner

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Spinner = styled.div`
  width: ${props => (props.size ? `${props.size}px` : '20px')};
  height: ${props => (props.size ? `${props.size}px` : '20px')};
  border: ${props =>
    props.border ? `${props.border}px solid #f3f3f3` : '4px solid #f3f3f3'};
  border-top: ${props =>
    props.border
      ? props.color
        ? `${props.border}px solid ${props.color}`
        : `${props.border}px solid #ff4500`
      : props.color
      ? `4px solid ${props.color}`
      : '4px solid #ff4500'};
  border-radius: 50%;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spinner 1s linear infinite;
`
