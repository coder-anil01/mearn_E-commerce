import React from 'react'
import Slider from "react-slick";
import {NavLink} from 'react-router-dom';
const Banner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
  };

  return (
    <>
     <Slider {...settings} className='homepage-banner'>
      <NavLink to='/'>
        <img src="https://res.cloudinary.com/coderanil/image/upload/v1710757894/vivo_vtmmfq.webp" alt="" />
      </NavLink>
      <NavLink to='/'>
        <img src="https://res.cloudinary.com/coderanil/image/upload/v1710757894/vivo_vtmmfq.webp" alt="" />
      </NavLink>
    </Slider>
    </>
  )
}

export default Banner
