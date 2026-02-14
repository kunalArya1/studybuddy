import Razorpay from "razorpay";

export const instace = new Razorpay({
  key_id: String(process.env.RAZORPAY_API_KEY),
  key_secret: String(process.env.RAZORPAY_API_SECRET),
});
