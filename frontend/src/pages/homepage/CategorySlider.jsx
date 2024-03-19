import React from 'react'
import Slider from "react-slick";

const CategorySlider = () => {

    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };

  return (
    <>
    <Slider {...settings} className='category-slider'>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
        <div className="category-card">
          <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
          <div>Fashion</div>
        </div>
    </Slider>
    </>
  )
}

export default CategorySlider
