import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CartDropdown from './components/CartDropdown/CartDropdown';
import HomePage from './routes/HomePage/HomePage';
import About from './routes/About/About';
import Shop from './routes/Shop/Shop';
import Category from './components/Category/Category';
import ProductPage from './routes/ProductPage/ProductPage';
import Gallery from './routes/Gallery/Gallery';
import Contact from './routes/Contact/Contact';
import Stockists from './routes/Informations/Stockists/Stockists';
import LegalNotice from './routes/Informations/LegalNotice/LegalNotice';
import Cgv from './routes/Informations/Cgv/Cgv';
import Privacy from './routes/Informations/Privacy/Privacy';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
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
            <Route path='/legal-notice' element={<LegalNotice />} />
            <Route path='/cgv' element={<Cgv />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
