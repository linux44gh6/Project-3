import React from 'react';
import img from "@/assets/colorful-stationery_93675-28229.jpg"
import { Button } from '@/components/ui/button';
const Banner = () => {
    return (
        <div className='flex justify-between items-center px-6 py-6 bg-slate-200'>
            <div className="px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">
          Discover amazing features that help you grow and succeed. Join us today!
        </p>
       <Button className="mt-4 bg-black text-white">Get Started</Button>
      </div>
          <div>
          <img src={img} alt="" />
          </div>
        </div>
    );
};

export default Banner;