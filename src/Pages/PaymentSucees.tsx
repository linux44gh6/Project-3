import { Button } from '@/components/ui/button';
import { clearCart } from '@/Redux/Features/ProductSlice/cartSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'sonner';

const PaymentSucees = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(clearCart());
        toast.success('Payment successful');
      }, [dispatch]);
    
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-[400px] h-[400px] bg-gray-200 shadow-md flex flex-col items-center justify-center mx-auto rounded-[20px]'>
                    <h1 className=' text-5xl font-bold mb-5 text-green-600'>Payment Success</h1>
                    <NavLink to={'/'}><Button>Back To Home</Button></NavLink>
            </div>
        </div>
    );
};

export default PaymentSucees;