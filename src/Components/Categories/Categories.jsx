 

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './categories.css'
export default function Categories() {
  const [categories ,setCategories] = useState([])
  async  function getCategories(){
    let {data} =await  axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data);
    console.log(data.data)
    }
    useEffect(()=>{
      getCategories()
    },[])
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:1500,
      responsive: [
     
        {
          breakpoint: 768, // For screens smaller than 768px
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // For screens smaller than 480px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
return (
  <div className=" my-5 container">

    <div  > 
      <h2>Shop Popular Categories</h2>
        <Slider {...settings}>
          {
            categories.map((item) =>(
              <div className='categories_item px-2'>
                <img height={200} src={item.image} className='w-100 py-2' alt="img" />
                <h6>{item.name}</h6>
              </div>
            ))
          }
      
          
        </Slider>


    </div>
  </div>
)
}

