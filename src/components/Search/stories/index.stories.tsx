import React from 'react'
import Search from '../index'

export default {
  title: 'Search',
}

export const SearchComponenet = () => {
  return (
    <Search
      apikey={'3bbe419e29e0e4728474e52a965154fb'}
      userId={'david@stipop.io'}
      lang={'en'}
      pageNumber={1}
      limit={30}
    />
  )
}
