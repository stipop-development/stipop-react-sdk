import React from 'react'
import PropTypes from 'prop-types'

import Type from './index.types'

import LogoIcon from '../svgs/logo.svg'
import SearchIcon from '../svgs/search-icon.svg'

function changeTypeToIconComponent(type) {
  switch (type) {
    case Type.LOGO:
      return <LogoIcon />
    case Type.SEARCH:
      return <SearchIcon />
    default:
      return 'icon'
  }
}

export function changeTypeToIconClassName(type) {
  switch (type) {
    case Type.LOGO:
      return 'stipop-icon-logo'
    case Type.SEARCH:
      return 'stipop-icon-search'
    default:
      return 'stipop-icon-unknown'
  }
}

export default function Icon({ className, type, children }) {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        'stipop-icon',
        changeTypeToIconClassName(type),
      ].join(' ')}
    >
      {children || changeTypeToIconComponent(type)}
    </div>
  )
}

Icon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  type: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(Type)),
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.element,
}

Icon.defaultProps = {
  className: '',
  children: null,
}

export const IconTypes = Type
