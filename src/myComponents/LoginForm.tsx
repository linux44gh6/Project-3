import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/Redux/Features/Auth/AuthAPi';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { verifyToken } from '@/Utils/verifyToken';
import { setUser } from '@/Redux/Slice';
import { Link, useNavigate } from 'react-router-dom';
type TLoginProps = {
    email: string;
    password: string;
}
const LoginForm = () => {
  const navigate=useNavigate()
    const dispatch = useDispatch()
    const [login]=useLoginMutation()
     const form = useForm<{ email: string,password:string }>({
            defaultValues: {
              email: "john.doe@example.com",
              password: "user1234",
            },
          });
          const onSubmit = async (data:TLoginProps) => {
            const loadingId=toast.loading("Loding in........")
               
                try{
                    const result=await login(data).unwrap()
                    const user=verifyToken(result?.data?.accessToken)
                    dispatch(setUser({user:user,token:result?.data?.accessToken}))
                    toast.success('Login Success',{id:loadingId})
                    navigate('/')
                    console.log(user);
                    console.log(result);

                }catch(err){
                    console.log(err);
                    toast.error('Login Failed',{id:loadingId})
                }
          };
    return (
        <div className='w-[400px] mx-auto '>
            <h1 className='text-3xl font-extrabold text-center'>Login</h1>
        <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className='flex flex-col gap-1 '>
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
             <Input className='border border-black' type='password' placeholder='Type Your Email' {...field}></Input>
             </FormControl>
           </FormItem>
         )}
       />
      </div>
       <Button className='w-full bg-black text-white' type="submit">Login</Button>
     </form>
   </Form>
   <p className='flex justify-self-start'>Do not have any Account?<Link className='text-blue-400'  to={'/register'}>SingUp</Link></p>
  </div>
    );
};

export default LoginForm;