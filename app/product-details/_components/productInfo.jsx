'use client'
import React from 'react'

import {ShoppingCart , BadgeCheck, BadgeAlert} from 'lucide-react'
import LaodingProductInfo from './LaodingProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApi from '../../_utils/CartApi'
import  {useContext} from 'react'
import { CartContext } from '../../_contextApi/contextApi'

function ProductInfo({product}) {


  const {user} = useUser()
  const router = useRouter()
  const {cart, setCart} = useContext(CartContext)

  const data = {
    data: {
      userName: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      products: [product?.id]
    }
  }

  
  const handleaddToCart = () =>{


    if(!user){

      router.push('/sign-in')

    }else {
      CartApi.addToCart(data).then(res => {

        setCart(requedtData => [
          ...requedtData, 
          
          {
            id: res?.data?.data?.id,
            product
          }
        ])
        
      })
    
  }
}



  return (
    <div>
      {product?.attributes?.title
        ?
        <div className=' p-5 bg-primary'>
          <h2 className='text-[20px] text-secondry font-semibold'>{product?.attributes?.title}</h2>
          <p className='text-gray-400 py-2 text-sm'>{product?.attributes?.category}</p>
          <p className='font-semibold text-gray-600 my-5'>{product?.attributes?.description[0]?.children[0]?.text}{product?.attributes?.description[0]?.children[0]?.text}</p>
          <h3 className='flex items-center gap-2 text-gray-400'>{product?.attributes?.instantDelivery ?<BadgeCheck className='text-green-400 h-5 w-5'/> : <BadgeAlert className='text-red-400 h-5 w-5' />}eligible for instant delivery</h3>
          <p className='py-3 text-[20px] text-secondry'>$ {product?.attributes?.price}</p>
          <button onClick={() => handleaddToCart()} className='bg-secondry p-3 rounded-lg text-white hover:bg-secondry/75 transition capitalize flex gap-2'><ShoppingCart />add to cart</button>
        </div>
        
        :<LaodingProductInfo /> }
      

    </div>
  )
}

export default ProductInfo
