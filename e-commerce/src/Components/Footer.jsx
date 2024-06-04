import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#e5e7eb] mt-16 py-12 px-5 lg:px-0'>
            <div className='max-w-[1145px] mx-auto  grid items-start md:grid-cols-4 grid-cols-2 gap-10'>
                <div className='max-w-fit'>
                    <h1 className='font-semibold text-3xl leading-9 mb-[.5rem] cursor-pointer'><span className='text-red-500'>React</span>Cart</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs the passage</p>

                    <h1 className='text-[18px] font-semibold mb-[.5rem] mt-[1rem]'>Newsletter</h1>
                    <div className='flex'>
                        <input type="text" placeholder='Your email address' className='border border-slate-400 p-2 outline-none rounded-l min-w-[175px]' />
                        <button className='bg-[#FD3D57] p-2 text-white rounded-r sm:text-md text-sm'>$ubscribe</button>
                    </div>
                </div>

                <div className='leading-8'>
                    <h1 className='text-[18px] font-semibold mb-[.5rem]'>My Account</h1>

                    <ol>
                        <li className='cursor-pointer hover:text-red-500'>Orders</li>
                        <li className='cursor-pointer hover:text-red-500'>Wishlist</li>
                        <li className='cursor-pointer hover:text-red-500'>Track Order</li>
                        <li className='cursor-pointer hover:text-red-500'>Manage Account</li>
                        <li className='cursor-pointer hover:text-red-500'>Return Order</li>
                    </ol>
                </div>


                <div className='leading-8 '>
                    <h1 className='text-[18px] font-semibold mb-[.5rem]'>Information</h1>

                    <ol>
                        <li className='cursor-pointer hover:text-red-500'>About Us</li>
                        <li className='cursor-pointer hover:text-red-500'>Return Policy</li>
                        <li className='cursor-pointer hover:text-red-500'>Terms & condition</li>
                        <li className='cursor-pointer hover:text-red-500'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-red-500'>FAQ</li>
                    </ol>
                </div>

                <div className='leading-8'>
                    <h1 className='text-[18px] font-semibold mb-[.5rem]'>Contact</h1>
                    <p>7895 Dr New Albuquerue, NM 19800, United States Of America</p>
                    <p> +566 477 256, +566 254 575</p>
                    <a href="https://mail.google.com/mail/u/0/#inbox" className='clamp-font-size'>Email Page</a>
                </div>
            </div>

        </div>
    )
}

export default Footer