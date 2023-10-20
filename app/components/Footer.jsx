"use client";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const formValue = {
      name,
      phone,
      email,
      message,
    };
    fetch("http://localhost:5000/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-sky-50 flex justify-between items-center p-20 mb-44 relative">
      <div>
        <div className="mb-20">
          <span className="flex items-center text-xl font-semibold mb-1">
            <BsTelephone className="mr-2 text-blue-500"></BsTelephone>
            <p>Call Us</p>
          </span>
          <p className="text-gray-500">+919354566860</p>
        </div>
        <div className="mb-20">
          <span className="flex items-center text-xl font-semibold mb-1">
            <ImLocation2 className="mr-2 text-blue-500"></ImLocation2>
            <p>Location</p>
          </span>
          <p className="text-gray-500">Ghaziabad, Uttar pradesh</p>
        </div>
        <div className="mb-20">
          <span className="flex items-center text-xl font-semibold mb-1">
            <FiGlobe className="mr-2 text-blue-500"></FiGlobe>
            <p>Mail Us</p>
          </span>
          <p className="text-gray-500">info@markall.in</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] h-[700px] shadow-xl right-40 bg-white p-16 absolute"
      >
        <h1 className="text-5xl font-semibold mb-5">Contact Now</h1>
        <p className="text-gray-500 mb-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          qui magnam culpa laboriosam numquam, quas illum eius? Asperiores
          illum, dolore minima inventore libero maxime, consequuntur adipisci
          assumenda iure qui similique.
        </p>
        <div className="relative w-full mb-7">
          <input
            type="name"
            id="name"
            name="name"
            className="w-full border p-2"
          />
          <label
            htmlFor="name"
            className="absolute top-0 left-2 -mt-2 px-1 bg-white text-gray-500"
          >
            Name
          </label>
        </div>
        <div className="relative w-full mb-7">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border p-2"
          />
          <label
            htmlFor="email"
            className="absolute top-0 left-2 -mt-2 px-1 bg-white text-gray-500"
          >
            Email
          </label>
        </div>
        <div className="relative w-full mb-7">
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full border p-2"
          />
          <label
            htmlFor="phone"
            className="absolute top-0 left-2 -mt-2 px-1 bg-white text-gray-500"
          >
            Phone
          </label>
        </div>
        <div className="relative w-full mb-7">
          <input
            type="text"
            id="message"
            name="message"
            className="w-full border p-2"
          />
          <label
            htmlFor="message"
            className="absolute top-0 left-2 -mt-2 px-1 bg-white text-gray-500"
          >
            Message
          </label>
        </div>
        <button className="bg-blue-500 px-5 py-2 rounded-sm text-white">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Footer;
