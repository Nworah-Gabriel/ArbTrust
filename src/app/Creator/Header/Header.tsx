'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'
import { usePathname } from 'next/navigation'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useRouter} from 'next/navigation'
import { useAccount } from 'wagmi'

const Header = () => {
    const [search, searchAct] = useState<boolean>(true)
    const router = useRouter();
    const {address, isConnected} = useAccount();
    const Pathname = usePathname()    
    
    const ifIsSettingsPage = Pathname === '/Creator/DSettings';
    const ifIsSecurityPage = Pathname === '/Creator/DSettings/Security';
    const ifIsNotificationPage = Pathname === '/Creator/DSettings/DNotifications';
    const ifisCreateNFTPage = Pathname === '/Creator/CreateNFT';

    if(isConnected == false){
      router.push("/")
    }

  return (
      <div id='hideHead' className={`w-full h-[10vh] pr-10 pt-7 pb-5 flex items-center justify-end bg-[#EDEDED] text-black ${ifisCreateNFTPage ? 'hidden' : 'block'} ${ifIsSettingsPage ? 'hidden' : 'block'} ${ifIsSecurityPage ? 'hidden' : 'block'} ${ifIsNotificationPage ? 'hidden' : 'block'}`}>
        <div className={`flex justify-end mr-5 px-3 rounded-md w-3/6 lg:w-1/4 items-center lg:bg-white lg:shadow-lg ${search ? 'shadow-none' : 'shadow-lg'}`}>
            <input type='text' className={`border-none h-12 w-full lg:w-5/6 ${search ? 'hidden lg:block' : 'block'} p-2`} />
            <Search onClick={() => searchAct(!search)} className={`${search ? '' : null}`} />
        </div>
      <div className='flex bg-white rounded-md p-2 px-3 items-center justify-between shadow-lg'>
        {/* {User.name} */}
        <p className='hidden lg:block mr-2'>@Vivian</p> 
        <Image alt='Profile' src={'/profile.webp'} width={30} height={100} />
        <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />;
      </div>
    </div>
  )
}

export default Header
