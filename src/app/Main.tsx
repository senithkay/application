'use client';
import React, {useEffect} from "react";
import SimpleSnackbar from "@/components/MIUI/snackbar";
import {Provider} from "react-redux";
import store from "@/redux/store";
import axiosInstance from "@/utils/axiosInstance";
import {RESPONSE_STATUS} from "@/utils/enums";
import {showHideLoading} from "@/redux/loading";

export default function Main({
                              children,
                          }: Readonly<{
    children: React.ReactNode;
}>){
    useEffect(() => {
        store.dispatch(showHideLoading({
            show:true
        }))
        axiosInstance.get('/auth/login')
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    store.dispatch(showHideLoading({
                        show:false
                    }))
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