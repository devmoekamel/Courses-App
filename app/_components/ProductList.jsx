import React from 'react'
import ProductItem from './ProductItem'

function ProductList({Products}) {

  // console.log(props);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4'>
      {Products?.map((item,index)=>(
     <ProductItem  Product={item} key={index} />
      ))} 
    </div>
  )
}

export default ProductList;
