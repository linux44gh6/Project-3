import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "@/assets/school-logo-design-featuring-pencils-books-develop-minimalist-logo-school-supply-retailer-minimalist-simple-modern-vector-logo-design_538213-49653-removebg-preview.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { components } from "@/myComponents/NavComponents/Components";

import React from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import CustomDialog from "../Dialog/Dialog";
// import { useGetAllProductsQuery } from "@/Redux/Features/ProductMangement/getAllProdcuts";

import { setSearchQuery } from "@/Redux/Features/ProductSlice/SearchSlice";
import DropDown from "../DropDown/DropDown";

const Nav = () => {
 const dispatch=useDispatch()
//  const search=useSelector((state:RootState)=>state.search)
 
  const cart=useSelector((state:RootState)=>state.cart)
  const user=useSelector((state:RootState)=>state.auth)
  console.log(user);
  const totalQuantity=cart.totalQuantity
  // const {data:product}=useGetAllProductsQuery(undefined)
  return (
   <div className="border-b-2 border-gray-200 shadow-sm  bg-white">
    <div className="flex justify-around items-center">
    <div>
      <NavLink to={'/'}><img className='w-24' src={img} alt="" /></NavLink>
      </div>
      <div className="w-9/12">
       <Input 
         onChange={(e) => dispatch(setSearchQuery(e.target.value))}
       className="bg-gray-200" type="text"  placeholder="Search your item" />
      </div>
      <div className=" flex justify-between items-center space-x-4">
        {user?<DropDown button={<IoPersonOutline size={34} />} />:
          <CustomDialog button={<IoPersonOutline size={34} />} />
        }
     
      <NavLink className={'relative'} to={'/cart'}><AiOutlineShoppingCart size={34} /> <Badge className="absolute -top-2 -left-2">{totalQuantity}</Badge></NavLink>
    </div>
    </div>
     <div className=" flex justify-center items-center">
     
     
  <div>
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Stationery</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Home Goods</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Toys & Accessories</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Collections</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Brands</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Clearance</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">New Arrivals</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  
    <NavigationMenuItem>
            <NavLink className={'font-semibold'} to={'/about'}>About</NavLink>
    </NavigationMenuItem>
   
  </NavigationMenuList>
</NavigationMenu>
  </div>
    </div>
   </div>
  );
};

export default Nav;