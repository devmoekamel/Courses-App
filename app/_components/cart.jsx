import React, { useContext } from 'react'
import { cartcontext } from '../_context/CartContext';
import Link from 'next/link';

function Cart() {
  const  {cart,setcart}= useContext(cartcontext); 
  return (
    <div className='w-[300px] h-[300px] bg-slate-100  z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto' >
      <div className="mt-4 space-y-6">
    <ul className="space-y-4">
      {cart?.map((item)=>(
      <li key={item?.id} className="flex items-center gap-4">
      <img
        src={item.product?.attributes?.image?.data?.attributes?.url}
        alt=""
        className="size-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm text-gray-900 line-clamp-1 font-bold">{item.product?.attributes?.title}</h3>

        <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
          <div>
            <dt className="inline ">Category :  </dt>
            <dd className="inline">{item.product?.attributes?.category}</dd>
          </div>

          <div>
            <dt className="inline">Price : </dt>
            <dd className="inline">{item.product?.attributes?.Price}</dd>
          </div>
        </dl>
      </div>
    </li>
      ))}

     
      </ul>
      </div>
      <div className="space-y-4 text-center mt-4">
      <Link
        href="/cart"
        className="block rounded  bg-gray-600 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>
    </div>
      </div>
)
}

export default Cart;
