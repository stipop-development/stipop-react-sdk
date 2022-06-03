import React from 'react'
import UnifiedComponent from '../index'

export default {
  title: 'UnifiedComponent',
}

export const Unified = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <UnifiedComponent
      params={{
        apikey: process.env.API_KEY,
        userId: process.env.USER_ID,
      }}
    />
  </div>
)
