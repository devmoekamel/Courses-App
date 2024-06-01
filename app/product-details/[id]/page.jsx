"use client";
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import { usePathname } from 'next/navigation';
import ProductList from '../../_components/ProductList';
import ProductApis from '../../_utils/ProductApis';



function ProductDetails({params}) {
    const path  = usePathname();
    const [product,setproduct]= useState({});
    const [productlist,setproductlist]= useState([]);


    useEffect(()=>{
        getproduct_(params.id);
    },[params.id])

const getproduct_=()=>{
    ProductApis.getproduct(params.id).then(Response=>{
        setproduct(Response.data.data);
        getProductListByCategory_(Response.data.data);
        
    })
    
}

const getProductListByCategory_= (product)=>
{
    ProductApis.getproductlistbyCategory(product?.attributes?.category).then(response=>{
        setproductlist(response.data.data);
    })
}


  return (
<div className=' my-10 container mx-auto'>
    
        <div className='flex flex-col gap-y-5  md:flex-row  md:gap-x-20 mt-10  md:items-center'>
            <ProductBanner Product={product}/>
            <ProductInfo Product={product}/>
        </div>
        <div className='my-11'>
            <h1 className='text-3xl my-5'>Similar Products</h1>
            <ProductList Products={productlist}/>
        </div>
    </div>
  )
}

export default ProductDetails
