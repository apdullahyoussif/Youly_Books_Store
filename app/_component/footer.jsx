/** @format */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<div className='border-t-2 '>
			<div className='container bg-white max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex  mx-auto'>
				<div className='flex items-center justify-center sm:w-1/3  border-r'>
					<Link
						href='/'
						className='flex-1 md:flex md:items-center md:gap-12 rounded-full'>
						<Image
							className='rounded-full'
							src='/logo.png'
							alt='logo'
							width={100}
							height={100}
						/>
					</Link>
				</div>

				<div className='p-5 sm:w-1/3 border-r'>
					<div className='text-sm uppercase text-primary font-bold mb-3'>
						Menu
					</div>

					<ul className='flex flex-col items-start gap-2'>
						<li>
							<Link
								className='hover:text-secondry transition'
								href='/'>
								Home
							</Link>
						</li>
						<li>
							<Link
								className='hover:text-secondry transition'
								href='/services'>
								Services
							</Link>
						</li>
						<li>
							<Link
								className='hover:text-secondry transition'
								href='/blog'>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className='hover:text-secondry transition'
								href='/about'>
								About
							</Link>
						</li>
						<li>
							<Link
								className='hover:text-secondry transition'
								href='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div className='p-5 sm:w-1/3'>
					<div className='text-sm uppercase text-primary font-bold mb-3'>
						Contact Us
					</div>
					<ul className='flex flex-col items-start gap-2'>
						<li>
							<a
								className='hover:text-secondry transition'
								href='mailto:ap9ullah27@gmail.com'>
								Email: ap9ullah27@gmail.com
							</a>
						</li>
						<li>
							<a
								className='hover:text-secondry transition'
								href='tel:01069155929'>
								Phone: 01069155929
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className=' flex py-2  text-gray-50 bg-primary text-sm flex-col items-center'>
				<div className='flex justify-center space-x-6 mt-4'>
					<a
						href='https://www.facebook.com/Abdullahyoussef222'
						className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-500 transition-colors duration-300'>
						<svg
							className='fill-current text-gray-400'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M22.675 0H1.325C0.592 0 0 0.592 0 1.325v21.35C0 23.408 0.592 24 1.325 24h11.497v-9.294H9.125v-3.622h3.697V8.285c0-3.663 2.228-5.658 5.496-5.658 1.562 0 2.904 0.116 3.291 0.167v3.752h-2.259c-1.77 0-2.112 0.841-2.112 2.073v2.717h4.225l-0.552 3.622h-3.673V24h7.217c0.733 0 1.325-0.592 1.325-1.325V1.325C24 0.592 23.408 0 22.675 0z'></path>
						</svg>
					</a>
					<a
						href='https://www.instagram.com/ap9ullah'
						className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-500 transition-colors duration-300'>
						<svg
							className='fill-current text-gray-400'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M12,2.163c3.207,0 3.582,0.012 4.847,0.07c1.254,0.058 2.362,0.452 3.236,1.326c0.874,0.874 1.268,1.982 1.326,3.236c0.058,1.265 0.07,1.64 0.07,4.847s-0.012,3.582-0.07,4.847c-0.058,1.254-0.452,2.362-1.326,3.236c-0.874,0.874-1.982,1.268-3.236,1.326c-1.265,0.058-1.64,0.07-4.847,0.07s-3.582-0.012-4.847-0.07c-1.254-0.058-2.362-0.452-3.236-1.326c-0.874-0.874-1.268-1.982-1.326-3.236c-0.058-1.265-0.07-1.64-0.07-4.847s0.012-3.582,0.07-4.847c0.058-1.254,0.452-2.362,1.326-3.236c0.874-0.874,1.982-1.268,3.236-1.326c1.265-0.058,1.64-0.07,4.847-0.07M12,0c-3.33,0-3.735,0.012-5.042,0.074c-1.366,0.061-2.587,0.451-3.715,1.565c-1.116,1.116-1.527,2.343-1.585,3.707c-0.058,1.31-0.074,1.724-0.074,5.052s0.016,3.743,0.074,5.052c0.058,1.365,0.469,2.591,1.585,3.707c1.128,1.114,2.349,1.504,3.715,1.565c1.307,0.062,1.713,0.074,5.042,0.074s3.735-0.012,5.042-0.074c1.366-0.061,2.587-0.451,3.715-1.565c1.116-1.116,1.527-2.343,1.585-3.707c0.058-1.31,0.074-1.724,0.074-5.052s-0.016-3.743-0.074-5.052c-0.058-1.365-0.469-2.591-1.585-3.707c-1.128-1.114-2.349-1.504-3.715-1.565c-1.307-0.062-1.713-0.074-5.042-0.074M12,6.012c-3.312,0-6,2.688-6,6s2.688,6,6,6s6-2.688,6-6S15.312,6.012,12,6.012zM12,14.012c-1.656,0-3-1.344-3-3s1.344-3,3-3s3,1.344,3,3S13.656,14.012,12,14.012zM17.605,5.335c0.613,0,1.11-0.497,1.11-1.11s-0.497-1.11-1.11-1.11s-1.11,0.497-1.11,1.11S16.992,5.335,17.605,5.335z'></path>
						</svg>
					</a>

					<a
						href='https://www.threads.net/@ap9ullah'
						className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-500 transition-colors duration-300'>
						<svg
							className='fill-current text-gray-400'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M24,4.556c-0.883,0.392 -1.833,0.656 -2.828,0.775c1.017,-0.609 1.798,-1.574 2.165,-2.723c-0.951,0.563 -2.005,0.974 -3.127,1.195c-0.897,-0.957 -2.178,-1.555 -3.594,-1.555c-2.72,0 -4.924,2.204 -4.924,4.924c0,0.386 0.044,0.762 0.128,1.124c-4.09,-0.205 -7.72,-2.163 -10.141,-5.142c-0.424,0.727 -0.668,1.569 -0.668,2.475c0,1.71 0.868,3.208 2.184,4.084c-0.809,-0.026 -1.572,-0.247 -2.232,-0.616c-0.001,0.021 -0.001,0.042 -0.001,0.063c0,2.374 1.691,4.356 3.934,4.806c-0.413,0.111 -0.845,0.171 -1.293,0.171c-0.318,0 -0.627,-0.031 -0.927,-0.089c0.626,1.951 2.447,3.377 4.606,3.415c-1.685,1.32 -3.811,2.105 -6.117,2.105c-0.399,0 -0.789,-0.023 -1.175,-0.069c2.18,1.397 4.771,2.212 7.556,2.212c9.048,0 13.992,-7.496 13.992,-13.987c0,-0.213 -0.005,-0.425 -0.014,-0.636c0.962,-0.689 1.8,-1.56 2.464,-2.549Z'></path>
						</svg>
					</a>
					<a
						href='https://www.linkedin.com/in/abdullah-mohammed-youssef'
						className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-500 transition-colors duration-300'>
						<svg
							className='fill-current text-gray-400'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M19.145,3.5h-13c-1.08,0 -1.97,0.89 -1.97,1.97v13c0,1.08 0.89,1.97 1.97,1.97h13c1.08,0 1.97,-0.89 1.97,-1.97v-13c0,-1.08 -0.89,-1.97 -1.97,-1.97Zm-11.13,16.13v-10.35h2.5v10.35h-2.5Zm1.27,-11.51c-0.81,0 -1.5,-0.66 -1.5,-1.48s0.69,-1.48 1.5,-1.48s1.5,0.66 1.5,1.48s-0.69,1.48 -1.5,1.48Zm8.53,11.51h-2.5v-5.67c0,-1.39 -0.49,-2.34 -1.74,-2.34c-0.95,0 -1.51,0.64 -1.76,1.26c-0.09,0.23 -0.11,0.56 -0.11,0.89v6.86h-2.5v-7.35h2.4v1c0.27,-0.41 0.77,-1.01 1.83,-1.01c1.32,0 2.3,0.86 2.3,2.7v5.66Z'></path>
						</svg>
					</a>
					<a
						href='https://www.youtube.com/@youlyenigma'
						className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-500 transition-colors duration-300'>
						<svg
							className='fill-current text-gray-400'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M21.8,8.447c-0.223,-1.287 -1.307,-2.292 -2.599,-2.599c-1.745,-0.48 -8.701,-0.48 -8.701,-0.48s-6.957,0 -8.701,0.48c-1.292,0.307 -2.376,1.312 -2.599,2.599c-0.48,2.737 -0.48,8.541 -0.48,8.541s0,5.804 0.48,8.541c0.223,1.287 1.306,2.292 2.599,2.599c1.744,0.48 8.701,0.48 8.701,0.48s6.956,0 8.701,-0.48c1.292,-0.307 2.376,-1.312 2.599,-2.599c0.48,-2.737 0.48,-8.541 0.48,-8.541s0,-5.804 -0.48,-8.541Zm-11.8,6.417v-5.834l5.683,2.917,-5.683,2.917Z'></path>
						</svg>
					</a>
				</div>

				<div className='flex mt-3 justify-center items-center gap-3'>
					<p className='text-center'>© 2024</p>
					<p className='text-center text-secondry font-semibold text-xl'>
						youly
					</p>
					<p className='text-center'> | All rights reserved</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
