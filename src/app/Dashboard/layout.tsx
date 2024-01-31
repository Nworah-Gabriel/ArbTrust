import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import  Sidebar  from './Sidebar/Sidebar'
import Header from './Header/Header'
import MobileSidebar from './Sidebar/MobileSidebar'
import Providers from '../ul/Providers'
import '@rainbow-me/rainbowkit/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeCertify',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#EDEDED] '>
      <body className={inter.className}>
      <Providers>
      <div className=' flex overflow-hidden'>
      <Sidebar />
      <MobileSidebar />
      <div className='w-full '>
      <Header />
        {children}
        </div>
        </div>
        </Providers>
      </body>
    </html>
  )
}
