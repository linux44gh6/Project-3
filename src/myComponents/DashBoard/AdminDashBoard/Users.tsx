import { useGetAllUserQuery } from '@/Redux/Features/UserManageMent/getAllUser';

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
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { useBlockUserMutation } from '@/Redux/Features/Auth/blockUserApi';
interface TUser{
    name:string,
    email:string,
    role:string,
    _id:string,
    isBlocked:boolean
}


const Users = () => {
    const {data,refetch}=useGetAllUserQuery(undefined)
    const [blockUser]=useBlockUserMutation()
    const handleToBlock = async (id: string) => {
        const updatedData = {isBlocked:true};
        Swal.fire({
          title: "Are you sure?",
          text: "The user will be Block.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Block",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await blockUser({ data: updatedData, id }).unwrap();
              toast.success("The user has been Blocked");
              refetch();
            } catch (error) {
              if (error instanceof Error) {
                toast.error(`${error.message}`);
              } else {
                toast.error("An unknown error occurred");
              }
            }
          }
        });
      };
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
                        data?.data?.map((user:TUser,index:number)=>(
                            <TableRow key={user?._id}>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="text-right">
                               {user?.isBlocked===false?
                                <Button onClick={()=>handleToBlock(user?._id)}>Block</Button>:<Button disabled onClick={()=>handleToBlock(user?._id)}>Already Blocked</Button>
                                }
                            </TableCell>
                        </TableRow>
                        ))
                      }
                   </TableBody>
               </Table>
    );
};

export default Users;