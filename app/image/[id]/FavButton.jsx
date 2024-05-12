'use client'

import MenuButton from '@components/MenuButton'
import { toastSuccess } from '@utils/toast'
import React, { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

const FavButton = () => {
  const [isFav, setIsFav] = useState(false)
  const handleFav = () => {
    if (isFav) toastSuccess('Removed from favorites!')
    else toastSuccess('Added to favorites!')
    setIsFav(!isFav)
  }
  return (
    <MenuButton Icon={isFav ? IoMdHeart : IoMdHeartEmpty} onClick={handleFav} />
  )
}

export default FavButton
