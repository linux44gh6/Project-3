import baseApi from "@/Redux/Api/BaseApi";

const updateOrderApi=baseApi.injectEndpoints({
    endpoints:(builders)=>({
        updateOrder:builders.mutation({
            query:({data,id})=>({
                url:`/orders/${id}`,
                method:"PATCH",
                body:data
            })
        })
    })
})
export const {useUpdateOrderMutation}=updateOrderApi