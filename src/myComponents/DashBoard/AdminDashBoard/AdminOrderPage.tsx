import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllOrderQuery } from "@/Redux/Features/ProductMangement/getAllOrder";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateOrderMutation } from "@/Redux/Features/ProductMangement/UpdateOrder";
import Swal from "sweetalert2";
import { toast } from "sonner";

// Define the Order type
interface Order {
  _id: string;
  userId?: {
    name: string;
  };
  userEmail?: string;
  status: string;
  totalAmount: number;
}

const AdminOrderPage: React.FC = () => {
  const { data, isLoading, refetch } = useGetAllOrderQuery(undefined);
  const [update] = useUpdateOrderMutation();

  console.log(data?.data);

  // Function to approve an order
  const handleToApprove = async (id: string) => {
    const updatedData = { status: "Shipped" };

    Swal.fire({
      title: "Are you sure?",
      text: "The Order will be approved for shipping.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await update({ data: updatedData, id }).unwrap();
          toast.success("Order has been approved");
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

  // Show loading skeletons if data is loading
  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="w-full h-[40px] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>A list of recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount ($)</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((order: Order, index: number) => (
          <TableRow key={order._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{order.userId?.name ?? "N/A"}</TableCell>
            <TableCell>{order.userEmail ?? "N/A"}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell className="text-right">${order.totalAmount.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              <Button
                onClick={() => handleToApprove(order._id)}
                disabled={order.status === "Shipped"}
              >
                {order.status === "Shipped" ? "Shipped" : "Approve"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminOrderPage;
