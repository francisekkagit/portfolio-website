"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/LayoutSpecific/Navbar'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Footer from '@/components/LayoutSpecific/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-container hide-scrollbar'>
        <NextUIProvider>
          {/* Dark Default */}
          <NextThemesProvider attribute='class' defaultTheme='light'>
            <Navbar/>
            {children}
            <Footer/>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
