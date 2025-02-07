
interface ProductItem {
    productId: {
        _id: string;
        title: string;
    };
    _id: string;
    quantity: number;
}

interface Product {
    products: ProductItem[];
    status: string;
    totalAmount: number;
}
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { useGetOrderByEmailQuery } from '@/Redux/Features/ProductMangement/getOrderByEmail';
import { Skeleton } from "@/components/ui/skeleton";

const OrderPage = () => {
    const user = useSelector((state: RootState) => state.auth.user) as { userEmail: string } | null;
    const email = user?.userEmail;
    const { data,isLoading } = useGetOrderByEmailQuery(email);
    // data?.data?.map((product) =>
    //     product?.products?.map((p)=>{
    //         console.log(p?.productId?.title);
    //     })
    // );
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
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((product: Product) =>
                    product?.products?.map((p: ProductItem) => (
                        <TableRow key={p.productId?._id || p._id}>
                            <TableCell className="font-medium">{p?.productId?.title}</TableCell>
                            <TableCell>{product.status}</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell>{p.quantity}</TableCell>
                            <TableCell className="text-right">{product.totalAmount}</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
};

export default OrderPage;
