
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {List} from 'lucide-react'
function ProductItem({ product }) {
  const imageUrl = product.attributes.image.data.attributes.url;

    
  return (
    <Link 
        href={`/product-details/${product.id}`}
        className=' shadow-2xl hover:border-x-2 bg-primary/25 hover:border-t-2 hover:border-secondry border-0 transition cursor-pointer rounded-lg w-[300px] mx-auto '>
      <Image
        src={imageUrl} 
        width={500}
        height={500}
        alt="Product Image"
        className='sm:h-[300px] h-[300px]  w-full object-contain rounded-t-xl '
      />
    <div className='flex items-center justify-between bg-primary  shadow-sm rounded-b-lg p-2'>
        <div className=''>
        <h2 className='text-xl line-clamp-1 text-secondry'>{product.attributes.title}</h2>
        <p className='text-gray-400 text-sm flex gap-2 items-center'><List /> {product.attributes.category }</p>
        </div>
        <h2 className='text-sm'>{product.attributes.price} $</h2>
    </div>
    </Link>
  );
}

export default ProductItem;
