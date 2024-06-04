import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='max-w-[1145px] m-auto flex items-center justify-between gap-9 mt-8 mb-4'>

      <div className='grid items-center md:grid-cols-2 md:gap-8 sm:gap-3'>
        <a href='/' className='font-semibold text-3xl leading-9'><span className='text-red-500'>React</span>Cart</a>

        <ul className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-6 md:gap-2 sm:gap-1 text-left'>
          <div className='group flex items-center gap-1 cursor-pointer relative'>
            <li>Home</li>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 translate-y-[1px] transform group-hover:rotate-180  duration-75">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            <div className='bg-white flex flex-col absolute top-28 invisible pl-3 pr-7 py-2 shadow-lg rounded group-hover:top-7 group-hover:visible duration-75 z-20'>
              <a href="">news</a>
              <a href="">team</a>
              <a href="">services</a>
              <a href="">events</a>
              <a href="">405</a>
            </div>
          </div>

          <li>Shop</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>

      <ul className='grid lg:grid-cols-3 lg:gap-8 md:gap-1 text-[13px] font-semibold sm:gap-3'>
        <li>Login/Register</li>
        <li className='lg:pl-3'>Language</li>
        <li>Currency</li>
      </ul>
    </div>
  )
}

export default Navbar