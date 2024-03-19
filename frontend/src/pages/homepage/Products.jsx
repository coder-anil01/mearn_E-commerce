import React from 'react'
import Slider from "react-slick";
import {NavLink} from 'react-router-dom';

const Products = ({image, title, descount, heading}) => {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };


  return (
    <div className='homepage-products'>
        <div className='homepage-products-heading'>
            <h2>{heading}</h2>
            <button>View All</button>
        </div>
        <Slider {...settings}>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
          <NavLink to='/' className='homepage-products-card'>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
            <div>{title}</div>
            <span>upto {descount} off</span>
          </NavLink>
        </Slider>
    </div>
  )
}

export default Products
