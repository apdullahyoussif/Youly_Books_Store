/** @format */

'use client';

import ProductApis from '/app/_utils/ProductApis';
import ProductList from '/app/_component/ProductList';
import React, { useEffect, useState } from 'react';
import ProductImage from '../_components/productImage';
import ProductInfo from '../_components/productInfo';
import { usePathname } from 'next/navigation';


function ProductDetails({ params }) {
	const path = usePathname();

	const [productDetails, setProductDetaials] = useState({});
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getProductById_();
	}, [params.productId]);

	const getProductById_ = () => {
		ProductApis.getProductById(params.productId).then((res) => {
			setProductDetaials(res?.data?.data);
			getProductByCategory(res?.data?.data);
		});
	};
	const getProductByCategory = (product) => {
		ProductApis.getProductByGategory(product?.attributes?.category).then(
			(res) => {
				setProductList(res?.data?.data);
			}
		);
	};


	return (
		<div className='bg-primary pt-6'>
			<div className='mt-5'>

				<div className='container grid grid-cols-1 lg:grid-cols-2 md:gap-0 gap-5 justify-around mt-10 pb-10'>
					<ProductImage product={productDetails} />
					<ProductInfo product={productDetails} />
				</div>
        <div className='bg-gray-400 pb-20 pt-10'>
        <div className='container'>
					<h2 className=' text-center  text-2xl font-extrabold  my-10 '>
					Other : <span className='text-primary'>{productList[0]?.attributes?.category}</span>
					</h2>
					<ProductList products={productList} />
				</div>
        </div>
			</div>
		</div>
	);
}

export default ProductDetails;
