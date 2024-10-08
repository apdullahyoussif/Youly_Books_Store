/** @format */

'use client';

import { SignIn } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export default function Page() {
	const { user } = useUser();

	return (
		!user && (
			<div>
				<section className='bg-white'>
					<div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
						<section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
							<img
								alt=''
								src='logo.png'
								className='absolute inset-0 h-full w-full object-cover opacity-80'
							/>
						</section>

						<main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
							<div className='max-w-xl lg:max-w-3xl'>
								<div className='relative -mt-16 block lg:hidden'>
									<a
										className='inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20'
										href='/'>
										<img
											src='logo.png'
											alt='logo'
											className='rounded-full '
										/>
									</a>

									<h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
										Welcome to{' '}
										<span className='uppercase text-secondry'>youly</span> Books
										Store
									</h1>

									<p className='mt-4 leading-relaxed text-gray-500'>
										Discover Your Next Great Read At Our Bookstore
									</p>
								</div>
								<div
									className='mb-8 mt-8'>
									<SignIn  />
								</div>
								
							</div>
						</main>
					</div>
				</section>
			</div>
		)
	);
}
