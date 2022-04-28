import React from 'react'
import styled from 'styled-components'

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner></Spinner>
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
  width: 20px;
  height: 20px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #383636;
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
