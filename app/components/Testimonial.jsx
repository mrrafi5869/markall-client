import React from "react";
import { BiSolidQuoteSingleLeft } from 'react-icons/bi';
const Testimonial = () => {
  return (
    <div className="bg-orange-50 p-10 grid grid-cols-2 gap-x-36 gap-y-10 mb-36">
      <div className="border-b border-b-gray-500 w-[600px] pb-7">
        <p className="text-2xl">OUR HAPPY CUSTOMERS</p>
        <h1 className="text-6xl font-semibold">
          What our customers <br /> say about us
        </h1>
      </div>
      <span></span>
      <span></span>
      <div>
        <div className="flex items-center text-8xl -ml-36 -space-x-10 text-gray-300">
            <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
            <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
        </div>
        <p className="-mt-7 text-2xl mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          necessitatibus est optio? Minima, omnis excepturi! Lorem ipsum dolor
          sit amet consectetur adipisicing.
        </p>
        <h4 className="text-3xl font-semibold">Jane doe</h4>
        <p className="text-gray-500 text-2xl">Product specialist lorem co.</p>
      </div>
    </div>
  );
};

export default Testimonial;
