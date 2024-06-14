"use client";
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

function ProductSection() {
    const [ProductsList,setproducts] = useState([]); 

    useEffect(()=>{
        getlatestproduct_();
    },[])

    const getlatestproduct_ = ()=>{
        ProductApis.getLatestProduct().then(response=>{
            // console.log(response.data.data);
            setproducts(response.data.data);
        })
    }
  return (
    <div className='px-10'>
        <h1 className='text-2xl my-3 font-bold'>Our Latest Courses</h1>
        <ProductList Products={ProductsList}/>
    </div>
  )
}

export default ProductSection
