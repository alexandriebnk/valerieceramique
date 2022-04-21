import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './routes/HomePage';
import About from './routes/About';
import Shop from './routes/Shop';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import PageNotFound from './routes/PageNotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Router>
        <main>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            {/*<Route path='/shop/:category' element={Content} />*/}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
