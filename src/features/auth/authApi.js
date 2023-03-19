import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        register:builder.mutation({
            query:(data)=>({
                url:"/register",
                method:"POST",
                body:data,
            }),
            async onQueryStarted(arg,{querryFulfilled,dispatch}){
try {
    const result=await querryFulfilled;
    localStorage.setItem("auth",JSON.stringify({
        accessToken:result.data.accessToken,
        user:result.data.user,
    })
    );
   dispatch(userLoggedIn({
    accessToken:result.data.accessToken,
    user:result.data.user,
})) 
} catch (error) {
    
}
            }
        }),
        login:builder.mutation({
            query:(data)=>({
                url:"/login",
                method:"POST",
                body:data,
            })
        }),
    }),
});

export const {useLoginMutation,useRegisterMutation}=authApi;
