import React from 'react';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const carouselItemStyle = {
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '0 10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className='page-content'>
     <Slider {...settings}>
      <div style={carouselItemStyle}>
        <h3>Item 1</h3>
      </div>
      <div style={carouselItemStyle}>
        <h3>Item 2</h3>
      </div>
      <div style={carouselItemStyle}>
        <h3>Item 3</h3>
      </div>
      {/* Add more items as needed */}
    </Slider>
    </div>
  );
};

export default Home;
