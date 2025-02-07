import React from 'react';
import { IoStarSharp } from "react-icons/io5";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
    return (
        <div className='mt-20 '>
            <h1 className=' text-center font-bold text-4xl'>Store Reviews</h1>
            <div className=" flex justify-center items-center mt-10">
                <Carousel  className="w-full max-w-2xl">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 max-w-2xl text-center">
                                    <Avatar>
                                        <AvatarImage className='w-20 rounded-full mx-auto' src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-2xl text-center"> This was a really positive shopping experience. Fast service. Lovely presentation of the goods. Great craftsmanship. And also wonderful packaging. Thank you Bungu!</span>
                                    <div className='flex justify-center items-center mt-4'>
                                    <IoStarSharp className='size-10'/>
                                    <IoStarSharp className='size-10'/>
                                    <IoStarSharp className='size-10'/>
                                    <IoStarSharp className='size-10'/>
                                    <IoStarSharp className='size-10'/>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center mt-4'>
                                   <p className='font-bold text-black'>Lars D</p>
                                   <p>Jan 10, 2025</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;