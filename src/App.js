import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './routes/HomePage';
//import About from './routes/About';
import CheckoutPage from './routes/CheckoutPage';
import Shop from './routes/Shop';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import Stockists from './routes/Informations/Stockists';
import LegalNotice from './routes/Informations/LegalNotice';
import Cgv from './routes/Informations/Cgv';
import Privacy from './routes/Informations/Privacy';
import PageNotFound from './routes/PageNotFound';
import Footer from './components/Footer';
//import CheckoutPage from './routes/CheckoutPage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          {/*<Route path='/about' element={<About />} />*/}
          <Route path='/about' element={<CheckoutPage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/stockists' element={<Stockists />} />
          <Route path='/legal-notice' element={<LegalNotice />} />
          <Route path='/cgv' element={<Cgv />} />
          <Route path='/privacy' element={<Privacy />} />
          {/*<Route path='/shop/:category' element={Content} />*/}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
