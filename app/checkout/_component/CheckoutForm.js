

'use client';
import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_contextApi/contextApi';
import { useUser } from '@clerk/nextjs';
import orderApi from '../../_utils/orderApi';
import CartApi from '../../_utils/CartApi';

const CheckoutForm = ({ amount }) => {
	const { cart, setCart } = useContext(CartContext);

	const { user } = useUser();
	const stripe = useStripe();
	const elements = useElements();

	const [laoding, setLaoding] = useState(false);
	const [errorMessage, setErrorMessage] = useState();

	const sendEmail = async (email, firstName, orderDetails) => {
		try {
			const res = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					firstName,
					orderDetails,
				}),
			});

			if (!res.ok) {
				const errorData = await res.json();
			} else {
				const responseData = await res.json();
			}
		} catch (error) {}
	};

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		const handleError = (error) => {
			setLaoding(false);
			setErrorMessage(error);
		};
		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
		createOrder();

		sendEmail();
		const res = await fetch(`api/create_intent`, {
			method: 'POST',
			body: JSON.stringify({
				amount: amount,
			}),
		});

		const clientSecret = await res.json();

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: 'http://localhost:3000/payment-confirm',
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};
	const createOrder = async () => {
		let productId = [];
		let orderDetails = cart.map((element) => ({
			name: element?.product?.attributes?.title,
			price: element?.product?.attributes?.price,
		}));
		cart.forEach((element) => {
			productId.push(element?.product?.id);
		});
		const data = {
			data: {
				email: user?.primaryEmailAddress?.emailAddress,
				userName: user?.firstName,
				amount,
				products: productId,
			},
		};

		try {
			const res = await orderApi.createOrder(data);
			if (res) {
				cart.forEach(async (element) => {
					await CartApi.deleteItemFromCart(element?.id);
				});

				await sendEmail(
					user?.primaryEmailAddress?.emailAddress,
					user?.firstName,
					orderDetails
				);
			}
		} catch (error) {}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='container max-w-[800px] my-24'>
				<PaymentElement />
				<button className='w-full bg-primary hover:bg-primary/85 transition p-3 rounded-md mt-5 text-secondry uppercase'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
