import React, { useEffect, useState } from 'react';
import ClearPrice from "./ClearPrice";
import { IoMdStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoHeart } from "react-icons/io5";



const Card = ({ item, dispatch }) => {

  const [isTaken, setIsTaken] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) ?? [];
    const wishlistData = JSON.parse(localStorage.getItem("wishlist")) ?? [];

    const itemInCart = cartData.some(cartItem => cartItem.id === item.id);
    const itemInWishlist = wishlistData.some(wishlistItem => wishlistItem.id === item.id);

    setIsTaken(itemInCart);
    setIsLiked(itemInWishlist);
  }, [item.id]);

  function addToCart(item) {
    const dataFromLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    const itemExists = dataFromLS.some((cartItem) => cartItem.id === item.id);

    let cartList = [];
    if (itemExists) {
      cartList = dataFromLS.filter(el => el.id !== item.id);
      setIsTaken(false);
    } else {
      cartList = [...dataFromLS, item]
      setIsTaken(true);
    }

    localStorage.setItem("cart", JSON.stringify(cartList));
    dispatch({ type: "ADD_TO_CART", payload: cartList });
  }


  function addToWishlList(item) {
    const dataFromLS = JSON.parse(localStorage.getItem("wishlist")) ?? [];
    const itemExistsWishlist = dataFromLS.find((wishlistItem) => wishlistItem.id === item.id);


    let newWishlist = [];
    if (itemExistsWishlist) {
      newWishlist = dataFromLS.filter(el => el.id !== item.id)
      setIsLiked(false);
    } else {
      newWishlist = [...dataFromLS, item];
      setIsLiked(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    dispatch({ type: "ADD_TO_WISHLIST", payload: newWishlist });
  }

  return (
    <div className='shadow-md rounded-b-lg hover:shadow-xl duration-200'>
      <div className='group flex justify-center relative w-full cursor-pointer'>
        <img className={`aspect-square object-cover rounded-t-lg`} src={item.thumbnail} alt="img" />

        <div className='flex items-center justify-center gap-4 w-full h-full absolute opacity-0 bg-slate-200/50 rounded-t-lg group-hover:opacity-100 duration-200'>
          <div onClick={() => addToCart(item)} className='bg-red-500 rounded-full p-2 cursor-pointer hover:bg-slate-900'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>

          <div onClick={() => addToWishlList(item)} className='bg-red-500 rounded-full p-2 cursor-pointer hover:bg-slate-900'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>

        </div>
      </div>

      <div className='p-[1rem]'>
        <h2 className="text-black text-lg font-bold">{item.title}</h2>

        <div className='flex items-center my-2'>
          <p className='text-[#fd3d57] text-[15px] line-through decoration-[0.5px] font-semibold'>${item.price}</p> <span className='text-[#9ca3af] text-[12px] pr-4'>(-{item.discountPercentage}%)</span>
          <ClearPrice item={item} />
        </div>

        <div className='flex items-center justify-between gap-3'>
          <div className='flex'>
            <IoMdStar className='w-5 h-5 text-yellow-400' />
            <IoMdStar className='w-5 h-5 text-yellow-400' />
            <IoMdStar className='w-5 h-5 text-yellow-400' />
            <IoMdStar className='w-5 h-5 text-yellow-400' />
            <IoMdStar className='w-5 h-5 text-yellow-400' />
            <p className='text-[15px] text-[#9ca3af] pl-2'>({item.rating})</p>
          </div>
          <div className='flex items-center gap-1'>
            {isTaken ? <IoMdCart  className='w-5 h-5 text-green-400'/> : ""}
            {isLiked ? <IoHeart className='w-5 h-5 text-red-400'/> : ""}
          </div>
        </div>


      </div>

    </div>
  )
}

export default Card