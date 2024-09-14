/** @format */

// components/Services.jsx
import React from 'react';

const servicesData = [
	{
		title: 'Fast Shipping',
		description:
			'We offer fast shipping for all the books available in the store.',
		icon: '🚚',
	},
	{
		title: 'Personalized Recommendations',
		description:
			'Get personalized recommendations based on your reading preferences.',
		icon: '📚',
	},
	{
		title: 'Customer Support',
		description: 'Our customer support team is available 24/7 to assist you.',
		icon: '💬',
	},
];

const Services = () => {
	return (
		<section className='py-28 container  '>
			<h2 className='text-2xl text-secondry bg-primary shadow w-[250px] mx-auto py-2 rounded-md mb-14 text-center'>Our Services</h2>
			<div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
				{servicesData.map((service, index) => (
					<div
						key={index}
						className='border p-6 rounded-lg text-center bg-gray-400'>
						<div className='text-4xl mb-4'>{service.icon}</div>
						<h3 className='text-xl text-white font-semibold mb-2'>{service.title}</h3>
						<p className='text-gray-800'>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
