
import Details from "@/Pages/UsersPages/Details";
import About from "../Pages/UsersPages/About";
import Home from "../Pages/UsersPages/Home";
import React from "react";
import Cart from "@/Pages/UsersPages/Cart";
import AllProducts from "@/Pages/UsersPages/AllProducts";
import PrivetRoute from "./PrivetRoute";
const userPath=[
    {
        name:"Home",
        path:'/',
        element:<Home/>
    },
    {
        name:"About",
        path:'/about',
        element:<About/>
    },
    {
        name:"Cart",
        path:'/cart',
        element:<PrivetRoute><Cart/></PrivetRoute>
    },
    {
        name:"AllProducts",
        path:'/allProducts',
        element:<AllProducts/>
    },
    {
        name:"Details",
        path:'/details/:id',
        element:<Details/>
    },
]
export default userPath