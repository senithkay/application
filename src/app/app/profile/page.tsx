'use client';
import * as React from 'react';
import CustomPaginationActionsTable from "@/components/MIUI/table";
import {TextField} from "@mui/material";

const Page = () =>{

    return (   <RecentOrders />)
}

const RecentOrders = ()=>{
    return (
        <div className={'w-full flex flex-col gap-[20px]'}>
            <div className={'flex border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                <div className={'w-[30%] flex flex-col justify-start h-[20vh]'}>
                    <h1 className="text-2xl font-bold mb-[20px]">Profile Photo</h1>
                    <p>This image will be displayed as your profile photo</p>
                </div>
                <div className={'w-[70%] border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                    <form action="" className={'flex flex-col gap-[10px]'}>
                        <div className={'w-full flex gap-[10px]'}>
                            <TextField size={'small'} id="outlined-basic" label="First Name" variant="outlined"/>
                            <TextField size={'small'} id="outlined-basic" label="Last Name" variant="outlined"/>
                        </div>
                        <TextField sx={{maxWidth: 500}} size={'small'} id="outlined-basic" label="Email"
                                   variant="outlined"/>
                    </form>
                </div>

            </div>
            <div className={'flex border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                <div className={'w-[30%] flex flex-col justify-start h-[20vh]'}>
                    <h1 className="text-2xl font-bold mb-[20px]">Personal Information</h1>
                    <p>This image will be displayed as your profile photo</p>
                </div>
                <div className={'w-[70%] border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                    <form action="" className={'flex flex-col gap-[10px]'}>
                        <div className={'w-full flex gap-[10px]'}>
                            <TextField size={'small'} id="outlined-basic" label="First Name" variant="outlined"/>
                            <TextField size={'small'} id="outlined-basic" label="Last Name" variant="outlined"/>
                        </div>
                        <TextField sx={{maxWidth: 500}} size={'small'} id="outlined-basic" label="Email"
                                   variant="outlined"/>
                    </form>
                </div>

            </div>
            <div className={'flex border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                <div className={'w-[30%] flex flex-col justify-start h-[20vh]'}>
                    <h1 className="text-2xl font-bold mb-[20px]">Password</h1>
                    <p>This image will be displayed as your profile photo</p>
                </div>
                <div className={'w-[70%] border-gray-300 border-[1px] p-[20px] rounded-2xl'}>
                    <form action="" className={'flex flex-col gap-[10px]'}>
                        <div className={'w-full flex gap-[10px]'}>
                            <TextField size={'small'} id="outlined-basic" label="First Name" variant="outlined"/>
                            <TextField size={'small'} id="outlined-basic" label="Last Name" variant="outlined"/>
                        </div>
                        <TextField sx={{maxWidth: 500}} size={'small'} id="outlined-basic" label="Email"
                                   variant="outlined"/>
                    </form>
                </div>

            </div>
            <div>
                <h1 className="text-2xl font-bold mb-[20px]">Recent Orders</h1>
                <CustomPaginationActionsTable/>
            </div>
        </div>
    )
}

export default Page;