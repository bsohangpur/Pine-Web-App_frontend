import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home, About, Service, OurTeam, Contact, Blog } from './pages'
import './App.css';
import { AppointmentForm, Footer, Navbar } from './components';
import { Career } from './containers';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className=" h-16">
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/appointment-form' element={<AppointmentForm />} />
          <Route path='/career' element={<Career />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
