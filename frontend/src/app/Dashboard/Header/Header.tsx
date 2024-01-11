'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useRouter} from 'next/navigation'
import { useAccount } from 'wagmi'
import Axios from 'axios';

const Header = () => {
    const [search, searchAct] = useState<boolean>(true)
    const router = useRouter();
    const {address, isConnected} = useAccount();
    const Pathname = usePathname()   
    const [username, setUsername] = useState<string | null>(null); 
    
    const ifIsSettingsPage = Pathname === '/Dashboard/DSettings' 
    const ifIsSecurityPage = Pathname === '/Dashboard/DSettings/Security'
    const ifIsNotificationPage = Pathname === '/Dashboard/DSettings/DNotifications'

    // useEffect(() => {
    //   const fetchUsername = async () => {
    //     try {
    //       const response = await Axios.get("https://localhost:2024/users");
    //       if (response.data.length > 0) {
    //         const firstUser = response.data[0];
    //         setUsername(firstUser.username);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching username:', error);
    //     }
    //   };
    
    //   fetchUsername();
    // }, []);
    useEffect(() => {
      const fetchUsername = async () => {
        try {
          const response = await Axios.get('/api/getUserinfo');
          setUsername(response.data.username);
        } catch (error) {
          console.error('Error fetching username:', error);
        }
      };
  
      fetchUsername();
    }, []);
  
    // if (!isConnected) {
    //   router.push('/');
    // }
    // if(isConnected == false){
    //   router.push("/")
    // }

  return (
      <div id='hideHead' className={`w-full h-[10vh] pr-10 pt-7 pb-5 flex items-center justify-end bg-[#EDEDED] text-black ${ifIsSettingsPage ? 'hidden' : 'block'} ${ifIsSecurityPage ? 'hidden' : 'block'} ${ifIsNotificationPage ? 'hidden' : 'block'}`}>
        <div className={`flex justify-end mr-5 px-3 rounded-md w-3/6 lg:w-1/4 items-center lg:bg-white lg:shadow-lg ${search ? 'shadow-none' : 'shadow-lg'}`}>
            <input type='text' className={`border-none h-12 w-full lg:w-5/6 ${search ? 'hidden lg:block' : 'block'} p-2`} />
            <Search onClick={() => searchAct(!search)} className={`${search ? '' : null}`} />
        </div>
      <div className='flex bg-white rounded-md p-2 px-3 items-center justify-between shadow-lg'>
        {username}
        {/* <p className='hidden lg:block mr-2'>@Vivian</p>  */}
        <Image alt='Profile' src={'/profile.webp'} width={30} height={100} />
        <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />;
      </div>
    </div>
  )
}

export default Header
