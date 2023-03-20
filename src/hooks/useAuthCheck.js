import { useEffect } from "react";

export default function useAuthCheck(){
    return(
        useEffect(()=>{
const localAuth=localStorage?.getItem('auth');
if(localAuth){
    const auth=JSON.parse(localAuth);
    if(auth?.accessToken && auth?.user){
        
    }
}
        },[])
    )
}