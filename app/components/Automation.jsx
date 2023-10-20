import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GrSettingsOption } from 'react-icons/gr';
const Automation = () => {
  return (
    <div className="bg-gray-100 p-10 flex justify-between items-center rounded-lg mb-14 relative">
      <div className="w-1/2">
        <h1 className="text-4xl font-semibold mb-10">Save precious time <br /> with automation</h1>
        <p className="text-2xl mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          rem libero voluptatum sed debitis. Alias in quidem numquam incidunt
          sed. Suscipit architecto cumque minima eligendi.
        </p>
        <span className="flex items-center cursor-pointer">
          <p className="mr-3">Hover on</p>
          <FaLongArrowAltRight></FaLongArrowAltRight>
        </span>
      </div>
      <div className="group ">
      <GrSettingsOption className="absolute right-20 bottom-32 text-[150px] group-hover:rotate-180 transition-transform duration-700 ease-linear"></GrSettingsOption>
      <GrSettingsOption className="absolute right-[300px] bottom-32 text-[150px] group-hover:-rotate-180 transition-transform duration-700 ease-linear"></GrSettingsOption>
      <GrSettingsOption className="absolute right-48 text-[150px] group-hover:-rotate-180 transition-transform duration-700 ease-linear"></GrSettingsOption>
      </div>
    </div>
  );
};

export default Automation;
