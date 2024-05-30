'use client';
import React, {useEffect} from "react";
import {useAppSelector} from "@/redux/hooks";
import {useRouter} from "next/navigation";
import DrawerAppBar from "@/components/MIUI/NavBar";

export default function AppLayOut({ children }: { children: React.ReactNode }) {
    const auth = useAppSelector(state => state.auth.auth)
    const router = useRouter();
    useEffect(() => {
        if (!auth.isAuthenticated) {
            router.push("/auth/signin");
        }
    }, [auth, router]);
    return (
        <div className={'text-black'}>
            {auth.isAuthenticated ? ( <DrawerAppBar>
                {children}
            </DrawerAppBar>): <></>}
        </div>
    );
}