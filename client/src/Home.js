import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import video from './Assets/video.mp4';

const Home = () => {
  return (
    <div className="home">
      <video className="home-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-container">
        <h1 className="home-title">Farm Fresh Avocados, Right to Your Doorstep!</h1>
        <p className="home-subtitle">Discover the Finest Avocados from Passionate Farmers</p>
        <p className="home-description">
          Welcome to our online marketplace, where the love for avocados meets the dedication of local farmers.
          Explore our selection of premium avocados, carefully nurtured and harvested to bring you the freshest and
          most delicious produce. With our platform, you can directly connect with farmers, negotiate prices, and
          experience the joy of farm-to-table goodness.
        </p>

        <Link to="/bookings" className="explore-button">
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
