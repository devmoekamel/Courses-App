import React from 'react'
import Image from 'next/image'
function ProductBanner({Product}) {
  return (
    <div >
 {Product?.attributes?.image?.data?.attributes?.url? 
 <Image className='rounded-2xl border shadow duration-700' 
     src={Product?.attributes?.image?.data?.attributes?.url} 
     alt='product img' width={500} height={500} />
     :
     <div className='w-[500px] h-[255px] bg-slate-200 animate-pulse rounded-lg'>
      </div>
     }  
    </div>
  )
}

export default ProductBanner
