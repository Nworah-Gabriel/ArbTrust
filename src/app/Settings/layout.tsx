import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import  Sidebar  from '../Dashboard/Sidebar/Sidebar'
import MobileSidebar from '../Dashboard/Sidebar/MobileSidebar'

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
    <html lang="en" className='bg-[#f8f8ff]'>
      <body className={inter.className}>
      <div className=' flex'>
      <Sidebar />
      <MobileSidebar />
        {children}
        </div>
      </body>
    </html>
  )
}
