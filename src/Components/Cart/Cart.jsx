import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link  } from 'react-router-dom'
export default function Cart() {

  let  {getCart ,deleteItem,setCounter,updataQTY } = useContext(cartContext)
  let[data,setData]=useState(null)
  let [loading,setLoading]=useState(true)
  useEffect(()=>{
    (async()=>{
    let data =await  getCart()
    if(data?.response?.data.statusMsg == 'fail'){
      setData(null)
    }else{
      setData(data)
    }
    // console.log(data)
    // setData(data)

    setLoading(false)
     
    })()
  }, [])

  async function deleteProduct(id){
    let data = await deleteItem(id);
    console.log(data)
    if(data.status == 'success'){
      toast.error('product deleted successfully')
      setCounter(data.numOfCartItems)
      setData(data)
    }

  }
  async function updataProduct(id,count){
    let data = await updataQTY(id,count);
    console.log(data)
    if(data.status == 'success'){
      toast.success('product updated successfully')
      setCounter(data.numOfCartItems)
      setData(data)
    }

  }
  if(loading) return <Loading/>
  if(data==null || data.numOfCartItems == 0) return <h2 className='text-center my-5 text-main'>No item in a Cart</h2>
  return (
    <div className='container my-2 bg-main-light p-3 rounded-1'> 
      <h2>Shop Cart:</h2>
      <p className='text-main'>Total Cart Price: {data?.data.totalCartPrice}</p>
      {data?.data.products.map(item=>{
        return <div className="row py-2 border-bottom" key={item._id}>
        <div className="col-md-1">
          <img src={item.product.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
            <p className='m-1'>{item.product.title}</p>
            <span className='text-main m-1 p-0'>Price: {item.price} EGP</span><br/>
            <button onClick={()=>{deleteProduct(item.product._id)}} className='btn p-0'><i class="fa-solid text-main fa-trash-can"></i> Remove</button>
          </div>
          <div>
            <button onClick={()=>{updataProduct(item.product._id,item.count + 1)}} className='btn brdr'>+</button>
            <span className='px-1'>{item.count}</span>
            <button disabled={item.count <= 1} onClick={()=>{updataProduct(item.product._id,item.count - 1)}}  className='btn brdr'>-</button>
          </div>
        </div>
      </div>
      })}
      <Link to={`/Address/${data.data._id}`} className='btn my-3 bg-main text-white'>Place Order</Link>
    </div>
  )
}

