import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { baseURL } from "../utils/baseUrl";

 
export let  cartContext= createContext(0)

async function addToCart(productId){
   return axios.post(baseURL + 'cart' ,{productId},{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
}
async function getCart(){
   return axios.get(baseURL + 'cart' ,{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
}
async function deleteItem(productId){
   return axios.delete(baseURL + 'cart/' + productId ,{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
}
async function updataQTY(productId,count){
   return axios.put(baseURL + 'cart/' + productId , {count},{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
}
async function pay(cartId,shippingAddress){
   return axios.post(baseURL + 'orders/checkout-session/' + cartId , {shippingAddress},{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
}
export default function CartContextProvider({children}){

    const [counter,setCounter] = useState(0)
    return <cartContext.Provider value={{counter,setCounter,addToCart,getCart,deleteItem,updataQTY,pay}}>

        {children}
    </cartContext.Provider>
}