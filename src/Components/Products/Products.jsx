 
import React, {   useEffect, useState } from 'react';
import './products.css'
 
 
import axios from 'axios';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
 
export default function Products( ) {
  const [searchTerm , setSearchTerm] =useState('')
    let[products,setProducts] = useState([])
    let[loading,setLoading] = useState(true)

    const searchedProduct = products.filter(item =>{
      if(searchTerm.value === '') return item
      if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return item
    })
   async function getProducts() {
   let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
   setProducts(data.data)
   setLoading(false)
   }
   useEffect(()=>{
    getProducts()
   },[])
   if(loading) return <Loading/>

   return<>
   
   <div className="container">
   <div className="search d-flex align-items-center justify-content-between w-50 mt-5 mb-5">
                <input type="text" placeholder='im looking for.......' value={searchTerm}
                 onChange={e=> setSearchTerm(e.target.value)}/>
                {/* <span><i className="ri-search-line"></i></span> */}
              </div>
    <div className="row">
     
      {products.map((item)=>{
        return <Product item={item} key={item._id}/> 
      })}
    </div>
   </div>
   </>
  
     
  
   
}
