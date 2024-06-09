'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Main from './Main';
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DrawerAppBar from "@/components/MIUI/NavBar";
import Footer from "@/components/footer";
import Button from "@mui/material/Button";
import {Backdrop, CircularProgress} from "@mui/material";
import {useAppSelector} from "@/redux/hooks";
import store from "@/redux/store";
import {addToCart} from "@/redux/cart";
import {showHideLoading} from "@/redux/loading";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang='en'>
    <head>

      <title>Loshan Gems</title>
      <meta name="google-site-verification" content="pQ4SicnT2iAXTHZlKCTxFRwXuhcWLDi7L4NIk-dGcxw"/>
    </head>
    <body className='bg-white overflow-auto'>
    <Main>
      <div className={'relative mt-[100px]'}>
        <div className={'text-black'}>
          <DrawerAppBar>
            {children}
          </DrawerAppBar>)
        </div>
      </div>
      
      <Footer/>
    </Main>
    </body>
    </html>
  );
}
