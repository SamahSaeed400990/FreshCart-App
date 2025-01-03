import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { cartContext } from '../../Context/CartContext';
 
 
export default function ProductsDetails() {
    let {counter ,setCounter}=useContext(cartContext)
   let x = useParams()
    
   let[product ,setProduct] =useState({});
   let[loading,setLoading] = useState(true)
  async function getProducts(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
    
    setProduct(data.data)
    setLoading(false)
   }
   useEffect(()=>{
    getProducts()
   } , [])
   if(loading) return <Loading/>
  return <>
    <div className='container my-5'>
        <div className="row mt-5">
            <div className="col-md-3">

                <img src={product.imageCover} className='w-100' alt="" />

            </div>
            <div className="col-md-9 my-4 py-5  ">
                <h4>{product.title}</h4>
                <p className='my-3'>{product.description}</p>
                <span>{product.category.name}</span>
                <div className='d-flex justify-content-between my-4'>
                    <div>
                        <div>
                            
                            <p> {product.price}EGP </p>
                        </div>
                       
                    </div>
                    <div>
                            <i className="fa-solid fa-star rating-color"></i>
                            {product.ratingsAverage}
                        </div>
                </div>
                <button onClick={()=>setCounter(counter + 1) }   className='btn bg-main text-white w-100'>Add to Cart</button>
            </div>
        </div>
    </div>
  
  </>
}
