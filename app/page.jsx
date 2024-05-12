import Image from 'next/image'
import React from 'react'

import {
  CiBellOn,
  CiCircleMore,
  CiFolderOn,
  CiSearch,
  CiUser,
} from 'react-icons/ci'
import { FaFile, FaHeart, FaVideo } from 'react-icons/fa'
import { FaCirclePlus, FaLocationDot } from 'react-icons/fa6'
import image from '@assets/image.jpg'
import image1 from '@assets/image1.jpg'
import image2 from '@assets/image2.jpg'
import image3 from '@assets/image3.jpg'
import image4 from '@assets/image4.jpg'
import image5 from '@assets/image5.jpg'
import image6 from '@assets/image6.jpg'
import { GoHome } from 'react-icons/go'

const Home = () => {
  return (
    <div className="my-4 *:mx-4 mb-20 flex flex-col gap-5">
      <div className="flex p-2 text-2xl font-semibold justify-between items-center shadow-sm rounded-sm ">
        <CiUser className="text-blue-800" />
        <div>Home</div>
        <CiBellOn className="text-blue-800" />
      </div>
      <div className="flex p-3 text-xl bg-gray-100 gap-4 align-center rounded-lg ">
        <CiSearch className=" text-2xl text-gray-400 font-semibold" />
        <input
          type="text"
          placeholder="search here"
          className="bg-gray-100 outline-none font-semibold"
        />
      </div>
      <div className="flex justify-around gap-10">
        <div className="flex justify-center align-center flex-col p-4 shadow rounded">
          <FaVideo className="text-blue-400  text-2xl" />
        </div>
        <div className="flex justify-center align-center flex-col p-4 shadow rounded">
          <FaHeart className="text-pink-400  text-2xl" />
        </div>
        <div className="flex justify-center align-center flex-col p-4 shadow rounded">
          <FaLocationDot className="text-yellow-400  text-2xl" />
        </div>
        <div className="flex justify-center align-center flex-col p-4 shadow rounded">
          <FaFile className="text-green-400  text-2xl" />
        </div>
      </div>
      <div className="grid object-cover overflow-auto grid-cols-2 gap-3 h-[80vh]">
        <div className="border border-slate-300 rounded p-2">
          <Image src={image} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image1} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image2} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image3} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image4} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image5} alt="" />
          <span>title</span>
        </div>
        <div className="border border-slate-300 rounded p-2">
          <Image src={image6} alt="" />
          <span>title</span>
        </div>
      </div>
      <nav className="flex items-center justify-around gap-5 shadow fixed w-full !m-0 py-3 bottom-0 bg-white">
        <div className="text-2xl text-yellow-400">
          <GoHome />
        </div>
        <div className="text-2xl">
          <CiFolderOn />
        </div>
        <div>
          <FaCirclePlus className="size-7" />
        </div>
        <div className="text-2xl">
          <CiUser />
        </div>
        <div className="text-2xl">
          <CiCircleMore />
        </div>
      </nav>
    </div>
  )
}

export default Home
