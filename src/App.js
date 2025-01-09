import React ,{useEffect,useContext}from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login' 
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import Address from './Components/Address/Address';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import CartContextProvider from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import FullCat from './Components/FullCat/FullCat';
import Logout from './Components/Logout/Logout';
import AuthLayout from './Layouts/AuthLayout';
import {UserContext} from './Context/UserContext'
let routes =createBrowserRouter([
  {path:'/', element:<MainLayout/> , children:[
    {index: true , element: <ProtectedRoutes><Home/></ProtectedRoutes>},
    {path: 'home' , element: <ProtectedRoutes><Home/></ProtectedRoutes>},
    {path:'Brands' , element:<ProtectedRoutes><Brands/></ProtectedRoutes>},
    {path:'Products' , element:<ProtectedRoutes><Products/></ProtectedRoutes>},
    {path:'Categories' , element:<ProtectedRoutes><Categories/></ProtectedRoutes>},
    
    {path:'FullCat' , element:<ProtectedRoutes><FullCat/></ProtectedRoutes>},
    {path:'Cart' , element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
     
    {path:'Logout' , element:<ProtectedRoutes><Logout/></ProtectedRoutes>},
    {path:'ProductsDetails/:id' , element:<ProtectedRoutes><ProductsDetails/></ProtectedRoutes>},
    {path:'Address/:id' , element:<ProtectedRoutes><Address/></ProtectedRoutes>},
     
    {path:'*' , element:<Notfound />},
  ]},
  {path:'/', element:<AuthLayout/> , children:[
    {path: 'Register' , element:  <Register/>  },
    {path: 'Login' , element: <Login/> },
  ]}
  

  
])

function App() {

   
   
   
 
  return<>

       <CartContextProvider>
        <RouterProvider router={routes}></RouterProvider>
       </CartContextProvider>
          
        <ToastContainer theme='colored' autoClose='900'/>
  
   

   
   </>
}

export default App;
