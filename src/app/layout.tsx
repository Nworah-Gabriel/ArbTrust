import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import Providers from './ul/Providers'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

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
  // function Profile() {
  //   const { address, isConnected } = useAccount()
  //   const { data: ensName } = useEnsName({ address })
  //   const { connect } = useConnect({
  //     connector: new InjectedConnector(),
  //   })
   
  //   if (isConnected){ console.log("connected") }else{console.log("is not connected")}
  // }
  // Profile()

  return (
    <html lang="en" className='h-[100svh]'>
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
