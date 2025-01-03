import React from 'react'
import { Outlet } from 'react-router-dom'
import {  NavLink } from 'react-router-dom'
import logo from '../Assets/images/freshcart-logo.svg'
export default function AuthLayout() {
  return<>
  <nav className="navbar navbar-expand-lg py-3 bg-body-tertiary">
  <div className="container-fluid mx-3">
     <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         
         
        <li className="nav-item">
          < NavLink className="nav-link position-relative" to="/Register">
            
            Register
           
          </NavLink>
          
        </li>
        <li className="nav-item">
          < NavLink className="nav-link position-relative" to="/Login">
            
            Login
           
          </NavLink>
          
        </li>
        
         
      </ul>
       
    </div>
  </div>
</nav>
  <Outlet></Outlet>
  </>
}
