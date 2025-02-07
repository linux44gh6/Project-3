import baseApi from "@/Redux/Api/BaseApi";

const paymentApi=baseApi.injectEndpoints({
    endpoints:(builders)=>({
        payment:builders.mutation({
            query:(items)=>({
                url:'/payment',
                method:"POST",
                body:items
            })
        })
    })
})
export const {usePaymentMutation}=paymentApi