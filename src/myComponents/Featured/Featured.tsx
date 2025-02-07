import { useGetAllProductsQuery } from "@/Redux/Features/ProductMangement/getAllProdcuts";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/Types/productsType";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

const Featured = () => {
  const navigate = useNavigate();
  const { data: product } = useGetAllProductsQuery(undefined);
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const filteredProducts = product?.data
    ?.filter((p: { title: string; }) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 6);

  const handleToShowDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  const handelToAllProducts = () => {
    navigate("/allProducts");
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Products</h2>
      <div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
          {filteredProducts?.length ? (
            filteredProducts.map((product: TProduct) => (
              <Card key={product._id}>
                <CardHeader>
                  <img className="" src={product.image} alt={product.title} />
                </CardHeader>
                <CardContent>
                  <CardTitle>${product.price}</CardTitle>
                  <CardTitle>{product.title}</CardTitle>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    onClick={() => handleToShowDetails(product?._id)}
                    className=" bg-white text-black border border-black w-full hover:bg-white hover:scale-105 transition duration-200"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-4">No products found!</p>
          )}
        </div>
      </div>
      <Button
        onClick={handelToAllProducts}
        className="mt-10 bg-black text-white flex justify-self-center"
      >
        View All Products
      </Button>
    </div>
  );
};

export default Featured;
