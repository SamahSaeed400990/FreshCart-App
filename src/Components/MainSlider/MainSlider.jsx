import React from 'react';
import Slider from "react-slick";
import slider1 from  '../../Assets/images/slider-image-2.jpeg';
import slider2 from '../../Assets/images/slider-2.jpeg';
import slider3 from '../../Assets/images/slider-image-1.jpeg';
import img1 from  '../../Assets/images/grocery-banner.png'
import img2 from  '../../Assets/images/grocery-banner-2.jpeg'

export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false
      };
  return (
    <>
    <div className='  container'>
    <div className="row g-0">
      <div className='col-md-9'> 
        <Slider {...settings}>
          <img height={400}  src={slider1} alt="slider1" />
          <img height={400}   src={slider2} alt="slider2" />
          <img height={400}  src={slider3} alt="slider3" />
          
        </Slider>
      </div>
      <div className='col-md-3'>
        <div className="images">
          <img src={img1} className='w-100' height={200} alt="img" />
          <img src={img2} className='w-100' height={200} alt="img" />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
