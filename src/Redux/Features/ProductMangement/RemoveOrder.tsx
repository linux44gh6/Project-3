import baseApi from "@/Redux/Api/BaseApi";

const removeOrderApi=baseApi.injectEndpoints({
    endpoints:(builders)=>({
        removeOrder:builders.mutation({
            query:(id)=>({
                url:`/orders/${id}`,
                method:"DELETE",
            })
        })
    })
})
export const {useRemoveOrderMutation}=removeOrderApi