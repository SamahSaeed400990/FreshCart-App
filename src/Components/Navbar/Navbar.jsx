import React, { useContext, useEffect } from 'react'
import logo from '../../Assets/images/freshcart-logo.svg'
import {  NavLink  } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
 
export default function Navbar() {
  let  {counter,getCart } = useContext(cartContext)
  // let navigate =useNavigate()
  useEffect(()=>{
    (async()=>{
    let data =await  getCart()
    console.log(data)
     })()
  },[])
  
  
  
  return <>
<nav className="navbar navbar-expand-lg py-3 bg-body-tertiary">
  <div className="container-fluid mx-3">
     <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
        <li className="nav-item">
           <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
           <NavLink className="nav-link" to="/Products">Products</NavLink>
        </li>
        <li className="nav-item">
           <NavLink className="nav-link" to="/FullCat">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/Brands">Brands</NavLink>
        </li>
        
         
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         
        <li className="nav-item">
          < NavLink className="nav-link position-relative" to="/Cart">Cart
              <i className="fa-solid fa-cart-shopping cartIcon mx-1"></i>
              {counter ?              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {counter}
                  <span className="visually-hidden">unread messages</span>
              </span> : ''}
          </NavLink>
          
        </li>
        
        <li className="nav-item">
          < NavLink className="nav-link position-relative" to="/Logout">
            
            Logout
           
          </NavLink>
          
        </li>
        
         
      </ul>
       
    </div>
  </div>
</nav>

  </>
}
