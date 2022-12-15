import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token=localStorage.getItem('user')
export const packageApi = createApi({

  reducerPath: "packageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.127.139.254:8080/khrouch/v1/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formValue) => {
        return {
          url: `/admin/authenticate`,
          method: "POST",
          body: formValue,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    getAllSubscription: builder.query({
      query: () => ({
        url: "/admin/package/get-all",
        method: "GET",
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      
      }),
    }),
    
  }),
});
export const {
  useLoginMutation,
  useGetAllSubscriptionQuery
} = packageApi;

