import React from 'react';
import { CiLogout } from "react-icons/ci";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Pointer } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/Redux/Slice';
import { toast } from 'sonner';
import { RootState } from '@/Redux/Store';
import { NavLink } from 'react-router-dom';

  
const DropDown = ({button}) => {
    const dispatch=useDispatch()
    const user=useSelector((state:RootState)=>state.auth.user)
    const handleToLogOut=()=>{
       if(user){
        dispatch(logOut())
        toast.success('LogOut successful')
       }
    }
    return (
        <DropdownMenu >
        <DropdownMenuTrigger>{button}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-[250px] h-[50vh]'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='cursor-pointer'>Profile</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'><NavLink to={'/dashboard'}>Dashboard</NavLink></DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Billing</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Team</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Subscription</DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer' onClick={handleToLogOut}>LogOut <CiLogout /></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
    );
};

export default DropDown;