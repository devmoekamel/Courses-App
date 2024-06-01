import React, { useContext } from 'react'
import { List, ShoppingBag } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import {useRouter} from 'next/navigation';
import  CartApis  from '../../../_utils/CartApis'
import { cartcontext } from '../../../_context/CartContext';

function ProductInfo({Product}) {
  const {user}=useUser();
  const Router =  useRouter();
  const {cart,setCart} = useContext(cartcontext);
  const handlecartButton = () =>
  {
    if(!user){Router.push("/sign-in")}
    const data = {
      data:{
        username:user.fullName,
        email:user.primaryEmailAddress.emailAddress,
        products:[Product?.id]
      }}
    CartApis.Addtocart(data).then(Response=>{
      console.log("Cart Created success");
      setCart(oldcart=>[
        ...oldcart,
        {
        id:Response?.data?.data.id,
        Product
      }
    
      ])
      console.log(cart);
    }).catch(error=>{
      console.log('error',error);
    })
    console.log(Product?.attributes?.Price)
      // add too cart logic
  }
  return (
    <div className='flex flex-col gap-y-4 px-4 '>
        <h1 className='text-4xl  sm:text-xl lg:text-4xl font-bold'>{Product?.attributes?.title} </h1>
        <h3 className='text-xl md:text-xl text-gray-500 flex gap-x-2 items-center'  >
            <List />{Product?.attributes?.category}</h3>
        <p className='text-xl font-bold'>{Product?.attributes?.description[0].children[0].text}</p>
        
        <h4  className='text-2xl md:text-2xl  font-bold text-yellow-600'>{Product?.attributes?.Price} $</h4>
        <button  onClick={()=>handlecartButton()} className='flex gap-2 bg-teal-600 hover:bg-teal-800  duration-500 text-center self-start px-6 py-3 rounded-full text-white'><ShoppingBag /> Add to Cart</button>
    </div>
  )
}

export default ProductInfo



// app/api/create-intent/route.tsx