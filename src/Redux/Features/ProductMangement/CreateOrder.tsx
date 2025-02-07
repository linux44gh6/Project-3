import baseApi from "@/Redux/Api/BaseApi";
const createOrderApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
          query: (data) => ({
            url: "orders/create-order",
            method: "POST",
            body: data,
          }),
        }),
      }),
})
export const { useCreateOrderMutation } = createOrderApi;