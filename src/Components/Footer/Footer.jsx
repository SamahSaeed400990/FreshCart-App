import React from 'react'
import './Footer.css'

export default function Footer() {
  return <>
    <div className=' footer_content'>
        <div className='container'>
           <h4 >Get the Freshcart App</h4>
           <p className='pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?</p>
           <div className='footer_input'>
            <input placeholder='Email..' type="text" name="" id="" className='form-control' />
            <button className='btn bg-main text-white  mx-2 w-25'>Share</button>
           </div>
           <div className="copyReight text-center pt-4">
            <p>© 2023 samah saeed. Add “All Rights Reserved</p>
           </div>
        </div>
    </div>

  </>
}
