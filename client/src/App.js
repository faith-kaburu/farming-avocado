import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import BookingsPage from './BookingsPage';
import BookingForm from './BookingForm';
import Contacts from './Contacts'; 
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bookings' element={<BookingsPage />} />
        <Route path='/booking-form/:companyId' element={<BookingForm />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
