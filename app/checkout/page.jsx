"use client";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHER_KEY);

export default function Checkout() {
	const SearchParams = useSearchParams();
  const options = {
	mode:'payment',
	currency:"usd",
	amount:100
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={SearchParams.get("amount")}/>
    </Elements>
  );
};