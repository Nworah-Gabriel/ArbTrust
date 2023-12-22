'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useRouter} from 'next/navigation'
import { useAccount } from 'wagmi'


const Header = () => {
  const router = useRouter();
const {address, isConnected} = useAccount();

if(isConnected == false){
  router.push("/")
}

    const [search, searchAct] = useState<boolean>(true)

  return (
    <div className='w-full h-26 mb-2 pr-10 pt-6 flex items-center justify-end '>
        <div className={`flex justify-end mr-6 rounded-md w-3/6 lg:w-1/4 items-center lg:bg-white lg:shadow-lg ${search ? 'shadow-none' : 'shadow-lg'}`}>
            <input type='text' className={`h-12 w-full lg:w-5/6 ${search ? 'hidden lg:block' : 'block'}`} />
            <Search onClick={() => searchAct(!search)} className={`${search ? '' : null}`} />
        </div>
      <div className='flex bg-white rounded-md p-4 px-6 justify-between shadow-lg'>
        {/* {User.name} */}
        <p className='hidden lg:block mr-2'>@Vivian</p> 
        <Image alt='Profile' src={'/profile.webp'} width={30} height={100} />
        <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />;
      </div>
    </div>
  )
}

export default Header
