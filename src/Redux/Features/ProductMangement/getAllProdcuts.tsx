import baseApi from "@/Redux/Api/BaseApi";

const getAllProductApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),
    }),
})
export const {useGetAllProductsQuery}=getAllProductApi