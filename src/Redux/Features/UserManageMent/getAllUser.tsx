import baseApi from "@/Redux/Api/BaseApi";

const getAllUserApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUser:builder.query({
            query:()=>({
                url:'/users',
                method:'GET'
            })
        })
    })
})
export const {useGetAllUserQuery}=getAllUserApi