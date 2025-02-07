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
import { Button } from '@/components/ui/button';
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';
import { TProduct } from '@/Types/productsType';
import { useDeleteProductMutation } from '@/Redux/Features/ProductMangement/DeleteProduct';
import Swal from 'sweetalert2';

const AdminProduct = () => {
    const { data, isLoading,refetch } = useGetAllProductsQuery(undefined);
    const [Delete]=useDeleteProductMutation()
    const handelToDelete=async(id:string)=>{
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
           const result= await Delete(id)
           console.log(result);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
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
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order: TProduct, index: number) => (
                    <TableRow key={order._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{order?.title}</TableCell>
                        <TableCell>{order?.rating}</TableCell>
                        <TableCell className="text-right">{order?.price}</TableCell>
                        <TableCell className="text-right">
                            <Button onClick={() => handelToDelete(order._id)} className='me-4'>Delete</Button>
                            <Button>Update</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AdminProduct;
