'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {useRouter} from 'next/navigation'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Signup = () => {
const router = useRouter();

return (
    <div className='flex'>
      <section className='overflow-hidden h-[100svh] hidden lg:block'>
        <Image src={'/image.webp'} alt='Image' width={1200} height={100} className='h-[100svh]' />
      </section>
      <section className='flex lg:grid items-center justify-center w-full '>
      <Image src={'/Logo2.webp'} alt='Logo' width={120} height={100}  className='hidden lg:block lg:mt-[-6rem]' />
        <div className='grid'>
      <Image src={'/Logo2.webp'} alt='Logo' width={120} height={100} className='block lg:hidden' />
        <div className='grid items-center justify-center ml-10 mt-20 lg:mt-[-10rem] lg:ml-0'>
        <h1 className='font-bold text-[3rem] lg:text-[4rem] w-3/4 opacity-70 '>Connect Your Wallet</h1>
        <p className='w-3/4 mt-10 mb-10'>Choose your prefered Blockchain and connect your on-chain Identity</p>
        <p className='font-bold mb-4'>Blockchain</p>
        <div className='flex items-center  w-3/4  p-2 rounded-md text-white'>
          <Image src={'/metamask.webp'} alt='Metamask Logo' width={40} height={100} className='mr-2' /> 
          <ConnectButton label='Connect with Metamask' />
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
