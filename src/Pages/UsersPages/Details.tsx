import { Button } from '@/components/ui/button';
import { useGetSingleProductQuery } from '@/Redux/Features/ProductMangement/getSingleProduct';
import React from 'react';
import { useParams } from 'react-router-dom';
import Rating  from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
const Details = () => {
    const toastId=toast.success('Product')
    const dispatch = useDispatch()
    const handleToCart = (data) => {
        dispatch({type:'cart/addItemToCart',payload:data})
        toast.success('Product added to cart',{id:toastId})
    }
    const { id } = useParams()
    console.log(
        id
    );
    const { data: product } = useGetSingleProductQuery(id);
    return (
        <div className=' flex justify-center px-2'>
            <div className='w-1/2 border border-gray-400 p-2'>
                <img className='w-80 mx-auto' src={product?.data?.image} alt="" />
                <h1 className='text-2xl font-bold underline '>Description</h1>
                <p className='font-semibold text-gray-600'>{product?.data?.description}</p>
            </div>

            <div className='w-1/2 border border-gray-400 flex flex-col px-9 py-2 '>
                <h1 className='text-4xl font-bold mb-10'>{product?.data?.title}</h1>
               <Rating className='text-4xl'
                emptySymbol={<FaStar className="icon" />}
                fullSymbol={<FaStar className="icon " />}
               initialRating={product?.data?.rating} readonly/>
                <p className='font-bold text-3xl mt-10'>${product?.data?.price}</p>
                <p>Shipping calculated at checkout.</p>
                <hr  className='mb-10 text-gray-300 mt-10'/>
                <hr />
                <div className='flex  gap-10 mt-10'>
                    <div className="flex items-center justify-between border border-black w-1/3 rounded-md">
                        <button className="px-3 bg-slate-200 py-1 font-bold text-xl text-black rounded-l">-</button>
                        <span className="px-4">0</span>
                        <button className="px-3 py-1 font-bold text-xl bg-slate-200 text-black rounded-r">+</button>
                    </div>
                    <Button onClick={()=>handleToCart(product?.data)} className=' w-1/2 bg-white text-black border border-black hover:bg-white'>Add to Cart</Button>

                </div>
            </div>
        </div>
    );
};

export default Details;