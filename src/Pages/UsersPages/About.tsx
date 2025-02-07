import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex">
      <div className="w-1/2 border border-gray-200 flex flex-col items-center justify-center">
        <div className="rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Welcome to <span className="font-semibold">[Your Website Name]</span>, your one-stop shop for all your stationery needs! We are passionate about providing high-quality stationery products that inspire creativity, organization, and productivity.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At <span className="font-semibold">[Your Website Name]</span>, we aim to bring you the best selection of notebooks, pens, planners, office supplies, and more. Whether you're a student, professional, or artist, we have the perfect stationery for you.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h2>
          <ul className="text-gray-600 text-left list-disc list-inside mb-6">
            <li>High-Quality Products</li>
            <li>Affordable Prices</li>
            <li>Unique & Stylish Designs</li>
            <li>Fast & Reliable Shipping</li>
            <li>Excellent Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 p-6">
      <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What types of stationery products do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer a wide range of products including notebooks, pens, planners, office supplies, art materials, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you provide bulk orders for businesses and institutions?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer bulk orders at discounted rates. Please contact us for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We accept returns within 14 days of purchase, provided the items are unused and in their original packaging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Shipping usually takes 3-7 business days, depending on your location.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship internationally. Shipping costs and delivery times vary based on destination.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
       <div className="mt-10">
       <h2 className="text-2xl font-semibold text-gray-700 mb-3">Get in Touch</h2>
        <Input type="text" className="w-2/3 border-2 border-gray-300 rounded-[5px] p-5" placeholder="Type Your Email"></Input>
        <Button className="mt-2">Send</Button>
        <div className="flex gap-2 mt-5 ">
        <FaFacebook className="size-10"></FaFacebook>
        <FaTwitter className="size-10"></FaTwitter>
        <FaInstagram className="size-10"></FaInstagram>
        <FaYoutube className="size-10"></FaYoutube>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About;
