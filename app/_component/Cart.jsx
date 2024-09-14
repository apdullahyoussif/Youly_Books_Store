
'use client';
import React, { useContext } from 'react';
import { CartContext } from '../_contextApi/contextApi';
import Link from 'next/link';

function Cart() {
	const { cart, setCart } = useContext(CartContext);

	return (
		<div>
			<div
				data-close='close'
				className='absolute right-[100px] top-[65px] z-10 w-[350px] h-[400px] border border-gray-200 shadow-sm rounded-xl bg-gray-50 px-4 py-8 sm:px-6 lg:px-8 overflow-auto'>
				<div className='mt-4 space-y-6'>
					<ul className='space-y-4'>
						{cart.map((item) => (
							<li
								key={item?.id}
								className='shadow bg-primary flex items-center gap-4 rounded'>
								<img
									src={item?.product?.attributes?.image?.data?.attributes?.url}
									alt='photo'
									className='size-16 rounded object-cover h-full'
								/>
								<div>
									<h3 className='text-sm text-secondry'>
										{item?.product?.attributes?.title}
									</h3>
									<div className='mt-0.5 space-y-px text-[10px]'>
										<div>
											<p className='text-gray-100'>Category</p>
											<span className='text-gray-400'>
												{item?.product?.attributes?.category}
											</span>
										</div>
										<div>
											<p className='text-gray-100'>Price</p>
											<span className='text-gray-400'>
												{item?.product?.attributes?.price}
											</span>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className='space-y-4 text-center'>
						<Link
							href='/cartPage'
							className='block rounded px-5 py-3 text-sm bg-secondry text-primary border-none transition hover:bg-primary hover:text-secondry'>
							View my cart ({cart?.length})
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
