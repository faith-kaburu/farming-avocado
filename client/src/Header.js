import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img
          src="https://i.pinimg.com/236x/2f/cf/23/2fcf23491ac891354857eb3c0008ca17.jpg"
          alt="jpg"
          width={100}
        />
        <div className="h-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contact us</Link>
          <Link to="/bookings">Bookings</Link>
          <button className="button">
            <Link to="/contacts">Contact</Link> {/* Corrected link to Contacts page */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
