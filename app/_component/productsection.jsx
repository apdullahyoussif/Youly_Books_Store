/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';
import Services from '../Services/page';
import Contact from '../contact/page';

function Productsection() {
	const [productsData, setProductsData] = useState([]);

	useEffect(() => {
		getLatestProducts_();
	}, []);

	const getLatestProducts_ = () => {
		ProductApis.getLatesProducts().then((res) =>
			setProductsData(res.data.data)
		);
	};

	return (
		<div>
			<div className='bg-primary/50 py-20'>
				<div className='container'>
					<div className='flex justify-center'>
						<h2 className=' text-primary w-[250px]text-center text-5xl font-extrabold mb-16  capitalize '>
							our latest books
						</h2>
					</div>
					<ProductList products={productsData} />
				</div>
			</div>
			<div className='bg-white'>
				<Services />
			</div>
			<div>
				<Contact />
			</div>
		</div>
	);
}

export default Productsection;
