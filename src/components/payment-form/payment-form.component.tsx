import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {StripeCardElement} from "@stripe/stripe-js"
import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useState,FormEvent } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/carts/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }), // stripe expect cents
    }).then((response) => response.json());
    const clientSecret = response.paymentIntent.client_secret;
    console.log(clientSecret);

    const cardDetails = elements.getElement(CardElement)
    if(!ifValidCardElement(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      console.log(paymentResult.error);
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Cfedit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
