import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { useAddUserMutation } from '@/Redux/Features/UserManageMent/userManagement';
type TRegisterProps = {
    name: string;
    email: string;
    password: string;
}
const RegisterForm = () => {
    const [register]=useAddUserMutation()
     const form = useForm<TRegisterProps>();
          const onSubmit = async (data:TRegisterProps) => {
           try{
            const result=await register(data).unwrap()
            console.log(result);
            toast.success('Register Success')
          console.log(data);
           }catch(err){
               if (err instanceof Error) {
                   toast.error(`${err.message}`);
               } else {
                   toast.error('An unknown error occurred');
               }
          }
    };

    return (
        <div className='w-[400px] mx-auto '>
            <h1 className='text-3xl font-extrabold text-center'>SignUp</h1>
        <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className='flex flex-col gap-1 '>
      <FormField
         control={form.control}
         name="name"
         render={({field }) => (
           <FormItem >
             <FormLabel className="flex justify-self-start">Name</FormLabel>
             <FormControl>
             <Input className='border border-black' type='text' placeholder='Type Your User Name' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
      <FormField
         control={form.control}
         name="email"
         render={({field }) => (
           <FormItem >
             <FormLabel className="flex justify-self-start">Email</FormLabel>
             <FormControl>
             <Input className='border border-black' type='email' placeholder='Type Your Email' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
       <FormField
         control={form.control}
         name="password"
         render={({field }) => (
           <FormItem>
             <FormLabel className="flex justify-self-start">Password</FormLabel>
             <FormControl>
             <Input className='border border-black' type='password' placeholder='Type Your Password' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
      </div>
       <Button className='w-full bg-black text-white' type="submit">SingUp</Button>
     </form>
   </Form>
   <p className='flex justify-self-start'>Do not have any Account?<Link className='text-blue-400'  to={'/login'}>SingIn</Link></p>
  </div>
    );
};

export default RegisterForm