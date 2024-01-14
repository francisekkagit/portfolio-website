import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/LayoutSpecific/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Francis Ekka',
  description: 'Website for Web Developer Francis Ekka.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-container'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
