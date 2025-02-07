import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllOrderQuery } from '@/Redux/Features/ProductMangement/getAllOrder';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useUpdateOrderMutation } from '@/Redux/Features/ProductMangement/UpdateOrder';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const AdminOrderPage = () => {
    const { data,isLoading,refetch } = useGetAllOrderQuery(undefined)
    const [update]=useUpdateOrderMutation()
    console.log(data?.data);
    // data?.data?.map((product) =>
    //     product?.products?.map((p)=>{
    //         console.log(p?.productId?.title);
    //     })
    // );
    const handelTOApprove=(id)=>{
        const updatedData={
            "status":"Shipped"
        }
          Swal.fire({
                title: "Are you sure?",
                text: "The Order will Approve for shipped",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Approve"
              }).then(async(result) => {
                if (result.isConfirmed) {
                   const result= await update({data:updatedData,id}).unwrap()
                   console.log(result);
                   toast.success('Order has been Approved')
                  refetch()
                }
              });
    }
    if (isLoading) {
        return (
            <div className="space-y-2">
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
            </div>
        );
    }

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Order</TableHead>
                    <TableHead>User Name</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order,index:number)=>(
                     <TableRow key={order._id}>
                     <TableCell className="font-medium">{index+1}</TableCell>
                     <TableCell>{order?.userId?.name}</TableCell>
                     <TableCell>{order?.userEmail}</TableCell>
                     <TableCell>{order?.status}</TableCell>
                     <TableCell className="text-right">{order?.totalAmount}</TableCell>
                     <TableCell className="text-right">
                        {order?.status==='Shipped'?<Button disabled onClick={()=>handelTOApprove(order._id)}>Shipped</Button>:<Button onClick={()=>handelTOApprove(order._id)}>Approve</Button>

                        }
                     </TableCell>
                 </TableRow>
                ))
                }
            </TableBody>
        </Table>
    );
};

export default AdminOrderPage;
