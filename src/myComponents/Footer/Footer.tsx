import { Input } from '@/components/ui/input';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" mt-20 bg-slate-200 h-[50vh] p-10 flex justify-between">
        <nav className="flex flex-col">
          <h6 className="footer-title text-2xl font-semibold">Services</h6>
          <a className="link link-hover text-lg">Branding</a>
          <a className="link link-hover text-lg">Design</a>
          <a className="link link-hover text-lg">Marketing</a>
          <a className="link link-hover text-lg">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title text-2xl font-semibold">Company</h6>
          <a className="link link-hover text-lg">About us</a>
          <a className="link link-hover text-lg">Contact</a>
          <a className="link link-hover text-lg">Jobs</a>
          <a className="link link-hover text-lg">Press kit</a>
        </nav>
        <nav className="flex flex-col max-w-xs">
          <h6 className="footer-title font-semibold text-2xl">Stay Connected</h6>
         <p className='text-lg'>Be the first to know about new products and exclusive offers with our newsletter.Email</p>
         <Input placeholder='Enter your email' type='email' className='mt-4 p-5 border border-black'/>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title font-semibold text-2xl mb-3">Social</h6>
          <div className="grid grid-flow-col gap-4">
           <NavLink to={'#'}><FaFacebook className='size-10'></FaFacebook></NavLink>
           <NavLink to={'#'}><FaInstagram className='size-10'></FaInstagram></NavLink>
           <NavLink to={'#'}><FaYoutube className='size-10'></FaYoutube></NavLink>
           <NavLink to={'#'}><FaTwitter className='size-10'></FaTwitter></NavLink>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;