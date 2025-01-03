import React from 'react'
import error from '../../Assets/images/error.svg'
export default function Notfound() {
  return <>
   <div className='mt-5 d-flex justify-content-center align-items-center'>
    <img src={error} alt="notfound" />
   </div>
  </>
}
