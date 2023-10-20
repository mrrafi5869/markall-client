import React from "react";
import Image from "next/image";
import audience from '../assets/audience.jpg'
import { BsFillPlayFill } from 'react-icons/bs';
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white pt-24 pb-52 px-10 rounded-bl-[100px] mb-10">
      <div>
        <h1 className="text-5xl font-semibold">
          Reach your - <br /> audience and convert <br /> your leads
        </h1>
        <p className="text-xl my-7">
          Get your customers with seo, rank your business with <br />
          email marketing, build sales leads
        </p>
        <span className="flex items-center">
          <button className="bg-green-400 px-4 py-1 rounded-md mr-5">Get start</button>
          <button className="flex items-center border border-gray-300 px-2 py-1 rounded-md">
            <BsFillPlayFill className="mr-1 text-xl"></BsFillPlayFill>
            <span>Watch demo</span>
          </button>
        </span>
      </div>
      <Image
        src={audience}
        alt="Picture of the author"
        width={500}
        height={500}
        blurDataURL="data:..."
        placeholder="blur"
      />
    </div>
  );
};

export default Header;
