import React from 'react'
import Image from 'next/image'
import { List } from 'lucide-react'
import Link from 'next/link'
function ProductItem({Product}) {
  return (
    <Link href={`../product-details/${Product.id}`}>
    <div className='shadow rounded-lg hover:shadow-lg hover:border duration-500 cursor-pointer'>
        <Image className='rounded-t-lg h-[170px] object-cover' src={Product?.attributes?.image?.data?.attributes?.url} alt='product img' width={400} height={350} />
        <div className='px-2 py-3 space-y-2'>
            <h2 className='text-2xl font-medium  line-clamp-1'>{Product?.attributes?.title}</h2>
            <h3 className='text-gray-500 flex gap-x-2' >
            <List />  {Product?.attributes?.category}</h3>
        </div>   
    </div>
    </Link>
  )
}

export default ProductItem
