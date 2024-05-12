import clsx from 'clsx'
import React from 'react'

const MenuButton = ({ Icon, iconStyle, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <Icon className={clsx('size-5', iconStyle)} />
    </button>
  )
}

export default MenuButton
