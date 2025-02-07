import baseApi from "@/Redux/Api/BaseApi";

const createProductApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createProduct:builder.mutation({
            query:(data)=>({
                url:'/products',
                method:'POST',
                body:data
            })
        })
    })
})
export const {useCreateProductMutation}=createProductApi