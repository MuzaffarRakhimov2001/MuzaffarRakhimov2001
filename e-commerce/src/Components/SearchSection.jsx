import React from 'react'
import SearchProduct from './SearchProduct';
import SelectSection from './SelectSection';
import { PiHouseLine } from "react-icons/pi";


const SearchSection = () => {
  return (
    <div className='bg-[#fd3d57] max-w-full py-3 sticky top-0 min-w-[310px] z-10'>
      <div className='max-w-[1145px] mx-auto flex xl:flex-row lg:flex-row md:flex-row items-center justify-center flex-col md:gap-0 gap-3 px-2'>
        <div className='group max-w-[220px] bg-slate-800 text-white flex items-center gap-4 rounded-lg -tracking-tighter px-7 py-3 cursor-pointer relative hover:rounded-b-none duration-75'>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          <div>
            <p className='hidde sm:block'>All Categories</p>
          </div>

          <div className='w-full bg-white z-10 shadow-lg absolute right-0 invisible top-36 group-hover:top-12 group-hover:visible duration-75'>

            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl'/>
              <p className='text-black hover:text-red-500'>Link</p>
            </div>
            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl' />
              <p className='text-black hover:text-red-500'>Link</p>
            </div>
            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl' />
              <p className='text-black hover:text-red-500'>Link</p>
            </div>
            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl' />
              <p className='text-black hover:text-red-500'>Link</p>
            </div>
            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl' />
              <p className='text-black hover:text-red-500'>Link</p>
            </div>
            <div className='flex items-center gap-2 border-b py-3 pl-4'>
              <PiHouseLine className='text-pink-400 text-xl' />
              <p className='text-black hover:text-red-500'>Link</p>
            </div>

          </div>
        </div>

        <SearchProduct />

        <SelectSection />
      </div>
    </div>
  )
}

export default SearchSection