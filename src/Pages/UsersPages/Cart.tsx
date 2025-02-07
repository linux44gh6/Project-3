import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RootState } from '@/Redux/Store';
import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { useCreateOrderMutation } from '@/Redux/Features/ProductMangement/CreateOrder';
import { toast } from 'sonner';
import { usePaymentMutation } from '@/Redux/Features/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';


const Cart = () => {
  const [payment, { isLoading }] = usePaymentMutation();
  const [createOrder] = useCreateOrderMutation();
  const data = useSelector((state: RootState) => state.cart);

  const sumTotal = data.items
    .map((item) => item.price * item.totalQuantity)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const orderData = {
    products: data.items.map((item) => ({
      productId: item._id,
      quantity: item.totalQuantity || 1,
    })),
    status: 'Pending',
    totalAmount: parseFloat(sumTotal),
  };

  const paymentData = {
    items: data.items.map(item => ({
      price: item.price * 100, 
      quantity: item.totalQuantity, 
      name: item.title,
    }))
  };

  const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);

 
  const handleToCheckOut = async () => {
    if (data.items.length === 0) {
        toast.error('Your cart is empty! Please add items before proceeding.');
        return; // Stop execution if cart is empty
      }
    try {
        
      // Create order first
      const orderResult = await createOrder(orderData).unwrap();
      if (orderResult.success) {
        toast.success('Order Confirmed');

        // Proceed to payment if order is confirmed
        const response = await payment(paymentData).unwrap();
        if (response?.data?.sessionId) {
          const stripe = await stripePromise;
          if (!stripe) {
            console.error('Stripe failed to initialize');
            return;
          }
          // Redirect user to Stripe
          const result = await stripe.redirectToCheckout({ sessionId: response.data.sessionId });
          if (result.error) {
            console.error('Stripe Checkout Error:', result.error.message);
          }
        } else {
          console.error('No sessionId returned from Stripe');
        }
      } else {
        toast.error('Order creation failed');
      }
    } catch (err) {
      console.error('Order creation or payment failed:', err);
      toast.error('An error occurred during checkout');
    }
  };

  return (
    <div className="mt-10 px-5 flex justify-between">
      <div className="flex flex-col gap-5 w-1/2">
        {data.items.map((item) => (
          <div key={item._id} className="flex flex-col">
            <Card className="flex w-full mb-5">
              <CardHeader>
                <img className="w-24" src={item.image} alt={item.title} />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold mb-2">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
                <div className="flex gap-10 mt-10 items-center">
                  <div className="flex items-center justify-between border border-black rounded-md">
                    <button className="px-3 bg-slate-200 py-1 font-bold text-xl text-black rounded-l">-</button>
                    <span className="px-4">{item.totalQuantity}</span>
                    <button className="px-3 py-1 font-bold text-xl bg-slate-200 text-black rounded-r">+</button>
                  </div>
                  <button className="text-2xl">
                    <FaRegTrashCan />
                  </button>
                </div>
              </CardContent>
              <CardContent>
                <h1 className="text-2xl font-semibold">${item.price * item.totalQuantity}</h1>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <Card className="w-full mb-5">
          <CardHeader>
            <h1 className="text-3xl font-bold">Order Summary</h1>
            <hr className="mb-10" />
            <hr />
          </CardHeader>
          <CardContent>
            <p>Taxes, discounts, and shipping calculated at checkout</p>
            <div className="flex justify-between mt-10 mb-5">
              <h1 className="text-2xl font-bold">SubTotal:</h1>
              <h2 className="text-2xl font-bold">${sumTotal}</h2>
            </div>
           {
            data?.items.length<=0? <Button onClick={handleToCheckOut} disabled className="w-full">
            {isLoading ? 'Processing...' : 'Order Now'}
          </Button>: <Button onClick={handleToCheckOut} className="w-full">
              {isLoading ? 'Processing...' : 'Order Now'}
            </Button>
           }
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
