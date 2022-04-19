import React from 'react'
import Icon, { IconTypes } from '../index'

export default { title: 'Icon' }

export const iconListDefault = () => [
  ...Object.keys(IconTypes).map(type => (
    <div>
      <h3>{type}</h3>
      <Icon type={type} />
    </div>
  )),
]
