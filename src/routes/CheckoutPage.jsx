import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const options = {
  // passing the client secret obtained from the server
  clientSecret: 'pi_1Dr1zO2eZvKYlo2CULM2IHho_secret_QxPd3KBJjkqmbkCl162gx4w53',
};

const CheckoutPage = () => {
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://localhost:3000/payment-succeed',
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button>Submit</button>
      </form>
    </Elements>
  );
};

export default CheckoutPage;
