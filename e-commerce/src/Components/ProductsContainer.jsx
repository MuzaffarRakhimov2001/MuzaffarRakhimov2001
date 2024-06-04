import React, { useEffect, useContext, useState } from 'react'; 
import { Context } from '../App';
import Card from './Card';


function ProductsContainer() {

    const [selectedCategory, setSelectedCategory] = useState("");

    const { dispatch, state } = useContext(Context);


    useEffect(() => {
        async function Categorizing() {
            try {
                const resp = await fetch('https://dummyjson.com/products');
                const data = await resp.json();
                dispatch({ type: "GET_PRODUCTS", payload: data.products });

                const uniqueCategories = new Set(data.products.map(product => product.category));
                const categoryArray = Array.from(uniqueCategories);
                // console.log(`Unique categories: ${categoryArray.join(', ')}`);

                // Optionally, you can store the categories in the state/context if needed
                dispatch({ type: "SET_CATEGORIES", payload: categoryArray });

            } catch (error) {
                console.log(error);
            }
        }
        Categorizing()
    }, [dispatch]);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory
        ? state.products.filter(product => product.category === selectedCategory)
        : state.products;

    return (
        <>
            <div className='max-w-[1145px] mx-auto flex items-center justify-between'>
                <div>
                    <select onChange={handleCategoryChange} value={selectedCategory} className='outline-none border border-slate-300 rounded'>
                        <option value="">all</option>
                        {state.categories.map((category, index) => (
                            <option key={index} value={category} >{category}</option>
                        ))}
                    </select>
                </div>

                <div className='flex gap-3'>
                    <div className='group border border-slate-200 p-1 rounded cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500 group-hover:text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>

                    </div>

                    <div className='group border border-slate-200 p-1 rounded cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500 group-hover:text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='max-w-[1145px] mx-auto mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8'>
                {filteredProducts.filter((item) => {
                    return state.search.toLowerCase() === ""
                        ? item
                        : item.title.toLowerCase().includes(state.search);
                })
                .map((item) => (
                    <Card item={item} key={item.id} dispatch={dispatch} />
                ))}
            </div>
        </>
    );
}

export default ProductsContainer
