import Image from "next/image";
import React from "react";

import { CiBellOn, CiSearch, CiUser } from "react-icons/ci";
import {
  FaDotCircle,
  FaFile,
  FaFolder,
  FaHeart,
  FaHome,
  FaLocationArrow,
  FaPlus,
  FaUser,
  FaVideo,
} from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { FaFileShield, FaLocationDot } from "react-icons/fa6";
import image from "@assets/image.jpg";
import image1 from "@assets/image1.jpg";
import image2 from "@assets/image2.jpg";
import image3 from "@assets/image3.jpg";
import image4 from "@assets/image4.jpg";
import image5 from "@assets/image5.jpg";
import image6 from "@assets/image6.jpg";

const Home = () => {
  return (
    <div className=" m-4 flex flex-col gap-5">
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
          className="bg-gray-100 outline-none
           text-gray-200 font-semibold"
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
      <div>
        <h1 className="text-slate-800 text-center font-bold text-2xl mt-4 mb-4">
          Albums
        </h1>
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
      </div>
      <div>
        <nav
          className="flex p-3 justify-evenly gap-5  shadow
        rounded  sticky bottom-0 "
        >
          <div className="text-2xl text-yellow-400">
            <FaHome />
          </div>
          <div className="text-2xl">
            <FaFolder />
          </div>
          <div className="text-2xl bg-black rounded-full p-1">
            <FaPlus className="text-white" />
          </div>
          <div className="text-2xl">
            <FaUser />
          </div>
          <div className="text-2xl">
            <IoMdMore />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
