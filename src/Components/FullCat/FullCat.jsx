 

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './fullCat.css'

export default function FullCat() {
  const [categories ,setCategories] = useState([])
  async  function getCategories(){
    let {data} =await  axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data);
    console.log(data.data)
    }
    useEffect(()=>{
      getCategories()
    },[])
     
return (
  <div className=" container ">

    <div  className='row all-categories'> 
      <h2 style={{textAlign:'center'}}> Categories</h2>
        
          {
            categories.map((item) =>(
              <div className='px-2' style={{width:200}}>
                <img height={200} src={item.image} className='py-2 w-100' alt="img" />
                <h6 style={{textAlign:'center'}}>{item.name}</h6>
              </div>
            ))
          }
      
          
     

    </div>
  </div>
)
}

