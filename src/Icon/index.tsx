import React from 'react'
import PropTypes from 'prop-types'

import Type from './index.types'

import LogoIcon from '../svgs/logo.svg'
import SearchIcon from '../svgs/search-icon.svg'
import SmileIcon from '../svgs/smile.svg'
import StoreIcon from '../svgs/store.svg'
import TimeIcon from '../svgs/time.svg'
import StoreBlackIcon from '../svgs/store-black.svg'
import CloseIcon from '../svgs/close.svg'
import PlusIcon from '../svgs/plus.svg'
import MinusIcon from '../svgs/minus.svg'
import PreviousIcon from '../svgs/previous.svg'

function changeTypeToIconComponent(type) {
  switch (type) {
    case Type.LOGO:
      return <LogoIcon />
    case Type.SEARCH:
      return <SearchIcon />
    case Type.SMILE:
      return <SmileIcon />
    case Type.STORE:
      return <StoreIcon />
    case Type.TIME:
      return <TimeIcon />
    case Type.STORE_BLACK:
      return <StoreBlackIcon />
    case Type.CLOSE:
      return <CloseIcon />
    case Type.PLUS:
      return <PlusIcon />
    case Type.MINUS:
      return <MinusIcon />
    case Type.PREVIOUS:
      return <PreviousIcon />
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
    case Type.SMILE:
      return 'stipop-icon-smile'
    case Type.STORE:
      return 'stipop-icon-store'
    case Type.TIME:
      return 'stipop-icon-time'
    case Type.STORE_BLACK:
      return 'stipop-icon-store-black'
    case Type.CLOSE:
      return 'stipop-icon-close'
    case Type.PLUS:
      return 'stipop-icon-plus'
    case Type.MINUS:
      return 'stipop-icon-minus'
    case Type.PREVIOUS:
      return 'stipop-icon-previous'
    default:
      return 'stipop-icon-unknown'
  }
}

export default function Icon({ className, type, onClick, children }) {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        'stipop-icon',
        changeTypeToIconClassName(type),
      ].join(' ')}
      onClick={onClick}
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
  onClick: PropTypes.func,
  children: PropTypes.element,
}

Icon.defaultProps = {
  className: '',
  onClick: () => {},
  children: null,
}

export const IconTypes = Type
