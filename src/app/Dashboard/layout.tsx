import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import  Sidebar  from './Sidebar/Sidebar'
import Header from './Header/Header'
import MobileSidebar from './Sidebar/MobileSidebar'

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
    <html lang="en" className='bg-[#f8f8ff] fixed overflow-hidden'>
      <body className={inter.className}>
      <div className=' flex'>
      <Sidebar />
      <MobileSidebar />
      <div className='w-full'>
      <Header />
        {children}
        </div>
        </div>
      </body>
    </html>
  )
}
