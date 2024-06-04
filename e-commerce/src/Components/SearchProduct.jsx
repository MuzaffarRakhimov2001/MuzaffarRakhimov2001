import React, { useContext, useState } from 'react';
import { GoSearch } from "react-icons/go";
import { Context } from '../App';


const SearchProduct = () => {
    const { dispatch } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);


    const searchHandler = () => {
        dispatch({type: 'SET_SEARCH_QUERY', payload: inputValue})
    }

    return (
        <div className='flex-1 sm:ml-24 sm:mr-16 flex items-center'>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search product...' 
                className='w-full min-w-fit pl-[1rem] py-3 rounded-l-md outline-none
                        placeholder:text-black'/>

            <div className='group bg-slate-800 py-3 px-3 lg:px-7 rounded-r-md cursor-pointer'>
                <GoSearch onClick={searchHandler} className='text-white text-2xl transform group-active:scale-75'/>
            </div>
        </div>
    )
}
export default SearchProduct;