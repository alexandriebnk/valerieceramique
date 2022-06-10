import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/HomePage';
import About from './routes/About';
import Shop from './routes/Shop';
import Category from './routes/Category';
import ProductPage from './routes/ProductPage';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import PaymentSuccess from './routes/PaymentSuccess';
import LegalInfos from './routes/LegalInfos';
import PageNotFound from './routes/PageNotFound';
import Header from './components/Header';
import CartDropdown from './components/CartDropdown';
import Loader from './components/Loader';

import Footer from './components/Footer';

import { CartProvider } from './context/cart.context';
import { DescriptionProvider } from './context/description.context';

const App = () => {
  return (
    <CartProvider>
      <DescriptionProvider>
        <div className='app'>
          <Loader />
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
              <Route path='/payment-success' element={<PaymentSuccess />} />
              <Route path='/mentions-legales' element={<LegalInfos />} />
              <Route path='/cgv' element={<LegalInfos />} />
              <Route path='/confidentialite' element={<LegalInfos />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DescriptionProvider>
    </CartProvider>
  );
};

export default App;
