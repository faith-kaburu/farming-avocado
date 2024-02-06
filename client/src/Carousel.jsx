import React, { useState, useCallback, useEffect } from 'react';
import './Carousel.css'; // Import your Carousel styles

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images]);

  useEffect(() => {
    console.log('Images:', images);
    console.log('Current Slide:', currentSlide);

    if (images && images.length > 0) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [images, currentSlide, nextSlide]);

  if (!images || images.length === 0) {
    return null; // or render a message or placeholder image
  }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentSlide ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Carousel;
