import { loadStripe } from "@stripe/stripe-js";
console.log(
  "kkkkkkkkkkkkkkkkkkkkkkkkkkkkey",
  process.env,
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
