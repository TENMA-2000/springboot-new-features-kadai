const stripe = Stripe('pk_test_51RIm2G02DERJx0jmcSvK3I9bTimBkwnQxZVnLIWuLVz4gOUMvpfE3ltlNHQeUApOUHZ8f0h7x8o999hcHOz6Z9WH00o3YNa4vY');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});