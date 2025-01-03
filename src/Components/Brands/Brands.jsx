  

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function Brands() {
  const [categories ,setCategories] = useState([])
  async  function getCategories(){
    let {data} =await  axios.get('https://ecommerce.routemisr.com/api/v1/Brands')
    setCategories(data.data);
    console.log(data.data)
    }
    useEffect(()=>{
      getCategories()
    },[])
     
return (
  <div className="container">

    <div className='row ' > 
       
       
          
          {
            categories.map((item) =>(
              <div  style={{width:200}} >
                <img className='w-100'  src={item.image}   alt="img" />
                <h6 style={{textAlign:'center'}}>{item.name}</h6>
              </div>
            ))
          }
          </div>
      
          


    </div>
  
)
}

