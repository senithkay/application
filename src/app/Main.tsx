'use client';
import React, {useEffect} from "react";
import SimpleSnackbar from "@/components/MIUI/snackbar";
import {Provider} from "react-redux";
import store from "@/redux/store";
import axiosInstance from "@/utils/axiosInstance";
import {RESPONSE_STATUS} from "@/utils/enums";

export default function Main({
                              children,
                          }: Readonly<{
    children: React.ReactNode;
}>){
    useEffect(() => {
        axiosInstance.get('/auth/login')
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    console.log(`User Authenticated as ${response.data.username}`);
                }
            })
    }, []);
    return <main>
       <Provider store={store}>
           {children}
           <SimpleSnackbar></SimpleSnackbar>
       </Provider>
    </main>
}