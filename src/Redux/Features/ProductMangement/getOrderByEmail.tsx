import baseApi from "@/Redux/Api/BaseApi";

const getOrderByEmailAPi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getOrderByEmail:builder.query({
            query:(email)=>({
                url: `/orders/${email}`,
                method: "GET",
            })
        })
    })
})

export const {useGetOrderByEmailQuery}=getOrderByEmailAPi