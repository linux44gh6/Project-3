import baseApi from "../../Api/BaseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddUserMutation } = userManagementApi;
export default userManagementApi;
