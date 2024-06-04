import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { PiHouseLine } from 'react-icons/pi';
import { Context } from '../App';
import ClearPrice from './ClearPrice';


const Wishlist = () => {

  const { dispatch } = useContext(Context);

  const dataFromLS = JSON.parse(localStorage.getItem("wishlist")) ?? [];

  function addToCart(item) {
    // Retrieve the wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) ?? [];
    // Retrieve the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    
    // Check if the item exists in the wishlist
    const itemExistsInWishlist = wishlist.find((wishlistItem) => wishlistItem.id === item.id);

    if (itemExistsInWishlist) {
        // Check if the item already exists in the cart
        const itemExistsInCart = cart.find((cartItem) => cartItem.id === item.id);

        if (!itemExistsInCart) {
            // Add the item to the cart
            cart.push(item);
        }
        
        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        
        // Optionally, you can remove the item from the wishlist if you want to
        const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.id !== item.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        
        // Dispatch the action to update the state with the new cart item
        dispatch({ type: "ADD_TO_CART", payload: item });
      }
}

  function removeWishCard(item) {
    const dataFromLS = JSON.parse(localStorage.getItem("wishlist")) ?? [];
    const updatedArray = dataFromLS.filter((existedItem) => existedItem.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedArray));
    dispatch({type: "ADD_TO_WISHLIST"});
  }

    return (
      <div className='max-w-[1145px] mx-auto'>
      <p className='text-center my-4 tracking-wider'><span>WishList</span> page</p>

        <div className='flex items-end gap-1 mb-2'>
          <a href="/"><PiHouseLine className='text-pink-400 text-2xl' /></a>
          <a href="/"><IoArrowBackCircleOutline className='text-pink-400 text-xl cursor-pointer' /></a>
        </div>

        <div className='flex flex-col gap-8 md:gap-4'>
          {dataFromLS.length > 0 ? (
            dataFromLS.map((item) => (
              <div key={item.id} className="md:max-w-[75%] max-w-[100%] shadow-md rounded-b-lg hover:shadow-xl duration-200 sm:flex gap-6">
                <div className='max-w-[300px] min-w-[150px]'><img className={`min-w-full h-full aspect-square object-cover rounded-l-lg cursor-pointer`} src={item.thumbnail} alt="Product Image" /></div>

                <div className='p-4 w-full'>
                  <h2 className="text-black text-lg font-bold">{item.title}</h2>
                  <div className='my-2 flex items-center gap-4 '>
                    <div className='flex items-center'>
                      <p className='text-[#fd3d57] text-[15px] line-through decoration-[0.5px] font-semibold'>${item.price}</p>
                      <p className='text-[#9ca3af] text-[12px]'>(-{item.discountPercentage}%)</p>
                    </div>
                    <ClearPrice item={item} />
                  </div>
                  <p>{item.description}</p>

                  <div className='flex items-center gap-2 mt-2 mb-4'>
                    <div className='flex'>
                      <IoMdStar className='w-5 h-5 text-yellow-400' />
                      <IoMdStar className='w-5 h-5 text-yellow-400' />
                      <IoMdStar className='w-5 h-5 text-yellow-400' />
                      <IoMdStar className='w-5 h-5 text-yellow-400' />
                      <IoMdStar className='w-5 h-5 text-yellow-400' />
                    </div>
                    <p className='text-[15px] text-[#9ca3af]'>({item.rating})</p>
                  </div>

                  <div className='flex flex-wrap items-center gap-4'>
                    <div onClick={() => addToCart(item)} className='flex-1 flex min-w-fit items-center justify-center sm:gap-2 gap-1 bg-[#FD3D37] border-2 ring-0 ring-offset-2 ring-offset-red-400 focus:ring-opacity-75 rounded-md p-4 cursor-pointer hover:bg-slate-900 hover:ring-offset-slate-900'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <p className='text-white text-xs tracking-wider flex-nowra'>Add to cart</p>
                    </div>

                    <div onClick={() => removeWishCard(item)} className='flex-1 flex min-w-fit items-center justify-center gap-2 bg-[#FD3D37] border-2 ring-0 ring-offset-2 ring-offset-red-400 focus:ring-opacity-75 rounded-md p-4 cursor-pointer hover:bg-slate-900 hover:ring-offset-slate-900'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                      <p className='text-white text-xs tracking-wider flex-nowrap'>Favourite</p>
                    </div>

                  </div>
                </div>

              </div>
            ))
          ) : (
            <p>No product in a wishlist...</p>)}

        </div>
      </div>
    )
  }

export default Wishlist