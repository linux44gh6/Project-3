import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';
  
const CustomDialog = ({button}) => {
    return (
        <Dialog>
  <DialogTrigger>{button}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold mb-4">
        Stationary Store
      </DialogTitle>
      <DialogDescription>
       <div className="flex flex-col gap-4">
      <Button><NavLink className={'w-full'} to={'/login'}>SignIn</NavLink></Button>
      <Separator orientation="horizontal" />
        <Button><NavLink className={'w-full'} to={'/register'}>SignUp</NavLink></Button>
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    );
};

export default CustomDialog;