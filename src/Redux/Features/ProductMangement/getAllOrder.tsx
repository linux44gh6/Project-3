import baseApi from "@/Redux/Api/BaseApi";

const getAllOrderApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllOrder:builder.query({
            query:()=>({
                url:'/orders',
                method:"GET"
            })
        })
    })
})

export const {useGetAllOrderQuery}=getAllOrderApi