'use cleint'
import Image from "next/image"
import { MintCertificate } from "@/app/ul/Navs"

const page = ()=> {
    return(
        <div className='w-full m-auto h-[90vh] overflow-y-scroll text-black bg-[#EDEDED]'>
            <form action="#">
                <div className="flex flex-col-reverse lg:flex-row">
                    <section className='bg-white m-5 lg:mr-2 w-11/12 lg:w-1/2 p-8 rounded-md mt-5 h-fit'>
                    <h2 className="text-center mb-5 font-bold text-[14px]">ANSWER THE QUESTIONS BELOW</h2>
                        <div className='grid leading-8'>
                            <label htmlFor="q1" className="font-semibold">What is the name of your Tutor</label>
                            <div>
                                <input type="radio" name='q1' className="mr-2" /> Great Adams
                            </div>
                            <div>
                                <input type="radio" name='q1' className="mr-2" /> Primidac
                            </div>
                            <div>
                                <input type="radio" name='q1' className="mr-2" /> Jerssec
                            </div>
                            <div>
                            <input type="radio" name='q1' className="mr-2" /> Joshua
                            </div>
                        </div>
                        <div className='grid leading-8 mt-5'>
                            <label htmlFor="q1" className="font-semibold">What is the name of your Tutor</label>
                            <div>
                                <input type="radio" name='q2' className="mr-2" /> Great Adams
                            </div>
                            <div>
                                <input type="radio" name='q2' className="mr-2" /> Primidac
                            </div>
                            <div>
                                <input type="radio" name='q2' className="mr-2" /> Jerssec
                            </div>
                            <div>
                            <input type="radio" name='q2' className="mr-2" /> Joshua
                            </div>
                        </div>
                        <div className='grid leading-8 mt-5'>
                            <label htmlFor="q1" className="font-semibold">What is the name of your Tutor</label>
                            <div>
                                <input type="radio" name='q3' className="mr-2" /> Great Adams
                            </div>
                            <div>
                                <input type="radio" name='q3' className="mr-2" /> Primidac
                            </div>
                            <div>
                                <input type="radio" name='q3' className="mr-2" /> Jerssec
                            </div>
                            <div>
                            <input type="radio" name='q3' className="mr-2" /> Joshua
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col m-5 lg:ml-2 w-11/12 lg:w-1/2 p-0">
                        <section className='bg-white rounded-md p-0'>
                            {/* <div className='p-2 bg-white rounded-md'> */}
                            {MintCertificate.map((brouse, index) => (
                                <div key={index} className=''>
                                    <div className='flex mx-6 mt-4'>
                                        <div className='flex flex-col mx-2 w-full'>
                                            <p className='font-bold text-[.7rem] opacity-70 w-full flex justify-end mb-1'>{brouse.name}</p>
                                            <p className='text-[.8rem] lg:mt-[-.5rem] font-bold flex justify-end'>{brouse.handle}</p>
                                        </div>
                                        <div className='flex justify-end'>
                                            <Image src={brouse.img} alt={brouse.handle} width={30} height={100} className='' />
                                        </div>
                                    </div>
                                    <div className='relative trigger p-3 flex justify-center h-1/2' >
                                    {/* <button type='button' className={`btn absolute justify-center  bg-white bg-opacity-80 p-2 rounded-md text-purple-900 font-bold text-[1rem] hover:shadow-lg hover:bg-opacity-100 hover:shadow-white`}>Mint NFT</button> */}
                                        <div className="block h-fit">
                                            <Image src={brouse.nft} alt={brouse.handle} width={500} height={40} className='rounded-md h-[44lvh]' />
                                            <div className='flex flex-col'>
                                                <div>
                                                    <p className='font-bold text-[22px] pt-3'>{brouse.title}</p>
                                                </div>
                                                <div className='flex justify-between'>
                                                    <p className='opacity-70 text-[.8rem]'>Transaction fee</p>
                                                    <div className='flex'>
                                                        <Image src={brouse.icon} alt={brouse.handle} width={20} height={10} className='rounded-md ' />
                                                        <p className='font-bold italic'>{brouse.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                {/* <h2 className='font-bold'>UI/UX CERTIFICATE</h2> */}
                            {/* </div> */}
                        </section>
                        <section className='hidden lg:flex flex-col mt-5'>
                            <label htmlFor="name" className='font-bold text-[14px]'> Full Name</label>
                            <input type="text" placeholder="Enter Certificate Display Name" className='p-3 bg-white rounded-md' />
                            <button className="bg-purple-800 text-white p-3 rounded-md mt-5">Mint Certificate</button>
                        </section>
                    </div>
                </div>
                <section className='flex flex-col w-11/12 mb-10 mx-5 lg:hidden'>
                    <label htmlFor="name" className='font-bold text-[14px]'> Full Name</label>
                    <input type="text" placeholder="Enter Certificate Display Name" className='p-3 bg-white rounded-md' />
                    <button className="bg-purple-800 text-white p-3 rounded-md mt-5">Mint Certificate</button>
                </section>
            </form>
        </div>
    )
}

export default page;