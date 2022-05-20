import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartDropdown from './components/CartDropdown';
import HomePage from './routes/HomePage';
import About from './routes/About';
import Shop from './routes/Shop';
import Category from './components/Category';
import ProductPage from './routes/ProductPage';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import Stockists from './routes/Informations/Stockists';
import LegalInfos from './components/LegalInfos';
import PageNotFound from './routes/PageNotFound';
import Footer from './components/Footer';
import CartContext from './store/cart-context';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      <div className='app'>
        <Header />
        <CartDropdown />
        <main>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:category' element={<Category />} />
            <Route path='/shop/:category/:slug' element={<ProductPage />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/stockists' element={<Stockists />} />
            <Route path='/mentions-legales' element={<LegalInfos />} />
            <Route path='/cgv' element={<LegalInfos />} />
            <Route path='/confidentialite' element={<LegalInfos />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
