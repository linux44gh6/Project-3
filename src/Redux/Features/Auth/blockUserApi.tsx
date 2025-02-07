import baseApi from "@/Redux/Api/BaseApi";

const updateOrderApi=baseApi.injectEndpoints({
    endpoints:(builders)=>({
        blockUser:builders.mutation({
            query:({data,id})=>({
                url:`/users/${id}`,
                method:"PATCH",
                body:data
            })
        })
    })
})
export const {useBlockUserMutation}=updateOrderApi