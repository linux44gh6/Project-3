import { useGetAllUserQuery } from '@/Redux/Features/UserManageMent/getAllUser';
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
const Users = () => {
    const {data}=useGetAllUserQuery(undefined)
    return (
        <Table>
                   <TableCaption>A list of your recent invoices.</TableCaption>
                   <TableHeader>
                       <TableRow>
                           <TableHead className="w-[100px]">No</TableHead>
                           <TableHead>Name</TableHead>
                           <TableHead>Email</TableHead>
                           <TableHead>Role</TableHead>
                           <TableHead className="text-right">Action</TableHead>
                       </TableRow>
                   </TableHeader>
                   <TableBody>
                      {
                        data?.data?.map((user,index)=>(
                            <TableRow key={user?._id}>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="text-right">
                                <Button>Block</Button>
                            </TableCell>
                        </TableRow>
                        ))
                      }
                   </TableBody>
               </Table>
    );
};

export default Users;