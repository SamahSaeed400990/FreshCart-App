import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {Audio} from 'react-loader-spinner';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
 import './login.css'
export default function Login() {
 let navigate = useNavigate()
  const [errorMsg,setErrorMsg] =useState('')
  const [loading,setLoading] =useState(true)
   
   function sendDataToApi(values){
    setLoading(false)
     axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
     .then(({data})=>{
      console.log(data)
      if(data.message==='success'){
        localStorage.setItem('token',data.token)
        
        navigate('/')
      }
     }).catch((err)=>{
 
      setErrorMsg(err.response.data.message)
      setLoading(true)
     })
       
  }
  function validationSchema(){


  
  let  schema =new Yup.object({
     
    email:Yup.string().email('email is invalid ').required('email is required'),
     
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password is required'),
     
  });
  return schema;
  }
   
  var formik = useFormik({
    initialValues:{
      name:'',
      
      email:'',
      password:'',
      rePassword:''
    }, validationSchema,
    onSubmit:(values) =>{
      sendDataToApi(values)

    }
    
  })
   
  return<>
  
  <div>
    <div className="w-75 m-auto my-5 mt-5 ">
       
      <form onSubmit={formik.handleSubmit} c>
      
        <label htmlFor="email">Email</label>
        <input onChange={formik.handleChange} type="email" name="email" id="email" className='form-control mb-3'/>
        {formik.errors.email && formik.touched.email?<div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>: null}
        
         
        <label htmlFor="password">Password</label>
        <input onChange={formik.handleChange} type="password" name="password" id="password" className='form-control mb-3'/>
        {formik.errors.password && formik.touched.password?<div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>: null}
        
 
         {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:''}
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>
          {loading?'Login': 
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
          <Link className='ps-3' to={'/Register'}>Register</Link>
      </form>
    </div>
  </div>
  
  </>
}
