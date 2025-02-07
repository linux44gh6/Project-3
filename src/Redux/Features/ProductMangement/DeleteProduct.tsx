import baseApi from "@/Redux/Api/BaseApi";

const DeleteProductApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/products/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useDeleteProductMutation}=DeleteProductApi