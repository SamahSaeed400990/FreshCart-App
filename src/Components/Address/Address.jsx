import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {Audio} from 'react-loader-spinner';

import { useNavigate, useParams } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
export default function Address() {
 let navigate = useNavigate()
  const [errorMsg,setErrorMsg] =useState('')
  const [loading,setLoading] =useState(true)
  let {id} =useParams()
  let {pay} =useContext(cartContext)
 async  function sendDataToApi(values){
    setLoading(false)
    let data = await pay(id , values)
     console.log(data)
     if(data.status == 'success'){
        window.location.href=data.session.url
     }
       
  }
 
   
  var formik = useFormik({
    initialValues:{
      
       details:'',
       phone:'',
       city:'',
      
    },  
    onSubmit:(values) =>{
      sendDataToApi(values)

    }
    
  })

 
  return<>
  
  <div>
    <div className="w-75 m-auto my-5">
      <h2>Address Now</h2>
      <form onSubmit={formik.handleSubmit}>
      
        <label htmlFor="details">Details:</label>
        <textarea onChange={formik.handleChange} type="text" name="details" id="details" className='form-control mb-3'></textarea>
         
         
        <label htmlFor="phone">Phone:</label>
        <input onChange={formik.handleChange} type="number" name="phone" id="phone" className='form-control mb-3'/>
         
        <label htmlFor="city">City:</label>
        <input onChange={formik.handleChange} type="text" name="city" id="city" className='form-control mb-3'/>
         
 
          
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>
          {loading?'Payment': 
          <Audio
          height="20"
          width="80"
          radius="9"
          color="white"
          ariaLabel='tree-dots-loading'
          wrapperStyle
          wrapperClass
        />
          
          }
          </button>
      </form>
    </div>
  </div>
  
  </>
}
