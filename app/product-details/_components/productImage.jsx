/** @format */

import React from 'react';
import Image from 'next/image';

function ProductImage({ product }) {
	return (
		<div className=''>
			{product?.attributes?.image?.data?.attributes?.url ? (
				<div className=' h-[400px] overflow-h'>
					<Image
						src={product?.attributes?.image?.data?.attributes?.url}
						alt='Image Product'
						width={500}
						height={400}
						className='rounded-xl shadow-lg h-full'
					/>
				</div>
			) : (
				<div className='w-[500px] h-[400px] bg-gray-200 rounded-xl shadow-lg animate-pulse'></div>
			)}
		</div>
	);
}

export default ProductImage;
