/** @format */

'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_contextApi/contextApi';
import CartApi from '../_utils/CartApi';
import Cart from './Cart';
import Link from 'next/link';

function Header() {
	const { user } = useUser();
	const [isLogged, setIsLogged] = useState(false);
	const { cart, setCart } = useContext(CartContext);

	const [openCart, setOpenCart] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		setIsLogged(window.location.href.toString().includes('sign-in'));
	}, []);

	useEffect(() => {
		const handleDocumentClick = (e) => {
			if (e.target.hasAttribute('data-close')) {
				setOpenCart(false);
				setOpenMenu(false);
			} else {
				setOpenCart(!openCart);
				setOpenMenu(false);
			}
		};

		if (openCart || openMenu) {
			document.addEventListener('click', handleDocumentClick);
		}

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, [openCart, openMenu]);

	useEffect(() => {
		user && getCartItem();
	}, [user]);

	const getCartItem = () => {
		CartApi.getUserCartItems(user.primaryEmailAddress?.emailAddress).then(
			(res) => {
				res?.data?.data.forEach((item) => {
					setCart((dataCart) => [
						...dataCart,
						{
							id: item?.id,
							product: item?.attributes?.products?.data[0],
						},
					]);
				});
			}
		);
	};

	return (
		!isLogged && (
			<header className='fixed top-0 left-0 w-full shadow-md z-50 bg-primary'>
				<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<Link
							href='/'
							className='flex-1 md:flex md:items-center md:gap-12'>
							<Image
								src='/logo.png'
								alt='logo'
								width={64}
								height={64}
							/>
						</Link>

						<nav
							aria-label='Global'
							className='hidden md:flex md:items-center md:gap-12 mr-3'>
							<ul className='flex items-center gap-6 text-sm'>
								<li>
									<Link
										className='text-secondry transition hover:text-gray-500'
										href='/'>
										Home
									</Link>
								</li>
								<li>
									<Link
										className='text-secondry transition hover:text-gray-500'
										href='/Services'>
										Services
									</Link>
								</li>
								<li>
									<Link
										className='text-secondry transition hover:text-gray-500'
										href='/blog'>
										Blog
									</Link>
								</li>
								<li>
									<Link
										className='text-secondry transition hover:text-gray-500'
										href='/about'>
										About
									</Link>
								</li>
								<li>
									<Link
										className='text-secondry transition hover:text-gray-500'
										href='/contact'>
										Contact
									</Link>
								</li>
							</ul>
						</nav>

						<div className='flex items-center gap-4'>
							{!user ? (
								<>
									<Link
										className='rounded-md bg-secondry hover:bg-secondry/85 px-5 py-2.5 text-sm font-medium text-white shadow'
										href='/sign-in'>
										Login
									</Link>
									<Link
										className='rounded-md bg-white px-5 py-2.5 text-sm font-medium text-secondry'
										href='/'>
										Register
									</Link>
								</>
							) : (
								<div className='flex items-center gap-3'>
									<div
										onClick={() => setOpenCart(!openCart)}
										className='flex items-center gap-1 cursor-pointer text-secondry hover:text-gray-400 shadow-2xl shadow-gray-100 rounded-full py-2 px-2'>
										<ShoppingCart />({cart?.length})
									</div>
									<UserButton />
									{openCart && <Cart />}
								</div>
							)}
						</div>

						<div className='block md:hidden '>
							<button
								onClick={() => setOpenMenu(!openMenu)}
								className='rounded-md bg-secondry p-2 text-white transition ml-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
							{openMenu && (
								<div className='absolute right-0 top-16 bg-white shadow-md rounded-lg w-48'>
									<ul className='flex flex-col items-start p-4'>
										<li className='mb-2'>
											<Link
												className='text-secondry hover:text-gray-500'
												href='/'>
												Home
											</Link>
										</li>
										<li className='mb-2'>
											<Link
												className='text-secondry hover:text-gray-500'
												href='/Services'>
												Services
											</Link>
										</li>
										<li className='mb-2'>
											<Link
												className='text-secondry hover:text-gray-500'
												href='/blog'>
												Blog
											</Link>
										</li>
										<li className='mb-2'>
											<Link
												className='text-secondry hover:text-gray-500'
												href='/about'>
												About
											</Link>
										</li>
										<li className='mb-2'>
											<Link
												className='text-secondry hover:text-gray-500'
												href='/contact'>
												Contact
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
		)
	);
}

export default Header;
