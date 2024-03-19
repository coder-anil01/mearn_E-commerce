import React from 'react'
import CategorySlider from './CategorySlider'
import Banner from './Banner'
import Products from './Products'
import '../../style/Homepage.css'

const HomePage = () => {
  return (
    <>
     <CategorySlider/>

     <Banner/>

     <Products  title="Faishon" heading="Discounts for You" />
     <Products  title="Faishon" heading="Trending Now" />
     <Products  title="Faishon" heading="Top Offers On" />
    </>
  )
}

export default HomePage
