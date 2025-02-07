import Banner from '@/myComponents/Banner/Banner';
import Featured from '@/myComponents/Featured/Featured';
import Testimonials from '@/myComponents/Testomonials/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <div>
           <Banner />
           <Featured />
           <Testimonials/>

        </div>
    );
}

export default Home;
