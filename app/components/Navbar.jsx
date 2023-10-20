import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black text-white flex justify-between px-10 py-3'>
            <h1>MARKALL</h1>
            <span>
            <Link href="/service" className='mr-5 text-gray-300'>Service</Link>
            <Link href="/price" className='mr-5 text-gray-300'>Pricing</Link>
            <Link href="/about" className='mr-5 text-gray-300'>About Us</Link>
            </span>
            <button className='btn bg-green-300 text-black font-semibold px-3 py-1 rounded-md'>Get started</button>
        </div>
    );
};

export default Navbar;