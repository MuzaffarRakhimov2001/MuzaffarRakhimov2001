import React, { createContext, useReducer } from 'react';
import Navbar from './Components/Navbar';
import ProductsContainer from './Components/ProductsContainer';
import Footer from './Components/Footer';
import SearchSection from './Components/SearchSection';
import { reducer } from './reducer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Home from './Components/Home';


export const Context = createContext();

const App = () => {

  const initialValue = {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
    search: ""
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const location = useLocation();


  // Define routes where Categories, ProductsContainer, and Footer should be hidden
  const hideComponentsOnRoutes = ['/cart', '/wishlist'];

  const shouldHideComponents = hideComponentsOnRoutes.includes(location.pathname);

  return (
    <Context.Provider value={{state, dispatch}}>

      <Navbar />

      <SearchSection />

      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {!shouldHideComponents && <ProductsContainer />}

      {!shouldHideComponents && <Footer />}

    </Context.Provider>
  )
}

export default App