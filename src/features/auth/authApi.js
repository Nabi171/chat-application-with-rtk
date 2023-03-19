import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        register:builder.mutation({
            query:(data)=>({
                url:"/register",
                method:"POST",
                body:data,
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:"/register",
                method:"POST",
                body:data,
            })
        }),
    }),
});
