import React from 'react'
import { MdOutlineRotateLeft } from 'react-icons/md'
import img from '@assets/image.svg'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import MenuButton from '@components/MenuButton'
import DeleteButton from './DeleteButton'
import FavButton from './FavButton'
import InfoButton from './InfoButton'
import AlbumButton from './AlbumButton'

const ImagePage = ({ params: { _id } }) => {
  return (
    <div className="h-screen flex flex-col items-center pt-4">
      <div className="flex justify-around items-center shadow-[0_4px_17px_0_#00000020] w-[80vw] sm:max-w-[40vw] h-fit py-3 px-4 mb-7 rounded-lg">
        <DeleteButton />
        <MenuButton Icon={MdOutlineRotateLeft} />
        <FavButton />
        <InfoButton />
        <AlbumButton />
      </div>
      <div className="w-[100vw] h-[65vh] relative">
        <button
          type="button"
          className="absolute z-10 h-full px-10 top-[50%] translate-y-[-50%] max-[536px]:hidden"
        >
          <IoIosArrowBack className="size-5" />
        </button>
        <Image src={img} alt="image" fill />
        <button
          type="button"
          className="absolute z-10 h-full px-10 right-0 top-[50%] translate-y-[-50%] max-[536px]:hidden"
        >
          <IoIosArrowForward className="size-5" />
        </button>
      </div>
      <div className="flex items-center mask gap-5 mt-6 mask">
        <div className="rounded-lg overflow-hidden h-fit">
          <Image src={img} alt="image" height={70} />
        </div>
        <div className="rounded-lg overflow-hidden h-fit">
          <Image src={img} alt="image" height={70} />
        </div>
        <div className="rounded-lg overflow-hidden h-fit">
          <Image src={img} alt="image" height={100} />
        </div>
        <div className="rounded-lg overflow-hidden h-fit">
          <Image src={img} alt="image" height={70} />
        </div>
        <div className="rounded-lg overflow-hidden h-fit">
          <Image src={img} alt="image" height={70} />
        </div>
      </div>
    </div>
  )
}

export default ImagePage
