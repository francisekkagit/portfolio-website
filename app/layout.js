"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/LayoutSpecific/Navbar'
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-container hide-scrollbar'>
        <NextUIProvider>
          <Navbar/>
          {children}
        </NextUIProvider>
          
  
      </body>
    </html>
  )
}
