import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify'

 
export default function Product({item}) {
    let {counter,setCounter,addToCart} = useContext(cartContext)
    let[btnLoading,setBtnLoading]=useState(true)
   async function addProductToCart(productId){
    setBtnLoading(false)
     let data = await  addToCart(productId)
     console.log(data)

      
      
     if(data.status == 'success'){
      toast.success('Product added successfully')
      setCounter(data.numOfCartItems)
      setBtnLoading(true)
     }
    }
   return <>
  
    

    <div className="col-md-2">
        <div className="product cursor-pointer rounded-3 p-3">
       
          <Link to={'/ProductsDetails/' + item._id}>

          <img src={item.imageCover} className='w-100' alt="" />
          <span className='text-main'>{item.category.name}</span>
          <h6 className='fw-bold my-2'>{item.title.split(' ').slice(0,2).join(' ')}</h6>
          <div className='d-flex justify-content-between my-3'>
            <div>{item.price}EGP</div>
            <div>
              <i className="fa-solid fa-star rating-color"></i>
              {item.ratingsAverage}
            </div>
          
          </div>
          </Link>
          <button disabled={!btnLoading} onClick={()=>(addProductToCart(item._id) )}    className='btn bg-main text-white w-100'>
      
            {btnLoading ? 'Add to cart' : 'loading...'}
             </button>

          
        </div>
      </div>
  
     
  
    
    </>
}
