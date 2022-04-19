import React from 'react'
import SearchComponent from '../index'

export default {
  title: 'SearchComponent',
}

export const Search = () => (
  <SearchComponent
    apikey={'3bbe419e29e0e4728474e52a965154fb'}
    userId={'david@stipop.io'}
    lang={'en'}
    pageNumber={1}
    limit={30}
  />
)

export const CustomSearch = () => (
  <SearchComponent
    apikey={'3bbe419e29e0e4728474e52a965154fb'}
    userId={'david@stipop.io'}
    lang={'en'}
    pageNumber={1}
    limit={30}
    width={720}
    height={600}
  />
)
