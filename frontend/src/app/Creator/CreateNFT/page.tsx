"use client"
import Image from 'next/image'
import { Fragment, useState } from 'react'
import Modal from '@/components/Modal';

const page = ()=> {
    const [showModal, setShowModal] = useState<boolean>(false);
    
    return(
        <Fragment>
            <div className='flex flex-col text-black pt-10 lg:p-0 overflow-y-scroll lg:overflow-hidden'>
                <div className="w-1/3 mr-5 pt-5 hidden lg:flex self-end">
                    <button className="w-full p-2 mr-2 border-2 border-purple-800 hover:bg-purple-800 text-purple-800 hover:text-white rounded-md" onClick = {() => setShowModal(true)}>Preview</button>
                    <button className="w-full p-2 bg-purple-800 text-white rounded-md">Publish NFT</button>
                </div>
                <section className='bg-white m-5 p-5 rounded-md'>
                    <h1 className="font-bold text-lg ml-2">Create New Item</h1>
                    <div className="flex flex-col lg:flex-row">
                        <section className="h-[45vh] lg:h-auto flex text-xs flex-col items-center justify-center border-2 border-dashed rounded-md m-2 w-full lg:w-1/2">
                            <Image src={'/upload_file.svg'} alt='...' width={20} height={20} className='h-16 w-16 hidden lg:block' />
                            <p>Drag and Drop or <span className='text-purple-800 font-bold'>Browse</span></p>
                            <p>Image(NFTs Assets)</p>
                            <p className='text-center'>File types supported: JPG, PNG, PDF | Max size: 50MB</p>
                        </section>
                        <section className="flex flex-col m-2 w-full lg:w-1/2">
                            <label htmlFor="NFTname">NFT Name</label>
                            <input type="text" placeholder='Enter Name' className='p-2 border-2 rounded-md' />
                            <div className="flex flex-wrap my-4 text-xs">
                                <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 mr-2 border-2 hover:border-purple-800 rounded-md'><Image src={'/payments.svg'} alt='...' width={8} height={8} className='h-5 w-5 mr-2' /> Free</button>
                                <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 mr-3 border-2 hover:border-purple-800 rounded-md'><Image src={'/local_offer.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /> Fixed price</button>
                                <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 border-2 hover:border-purple-800 rounded-md'><Image src={'/people.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /> Open For Bid</button>
                            </div>
                            <h1 className='mb-1'>Minting Name Positioning</h1>
                            <div className="flex justify-between">
                                <button className="flex w-full items-center justify-center p-2 text-purple-800 border-2 rounded-md"><Image src={'/align_horizontal_left.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                                <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md"><Image src={'/align_horizontal_center.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                                <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md"><Image src={'/align_horizontal_right.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                                <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md"><Image src={'/align_vertical_top.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                                <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md"><Image src={'/align_vertical_center.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                                <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md"><Image src={'/align_vertical_bottom.svg'} alt='...' height={10} width={10} className={'h-5 w-5'} /></button>
                            </div>
                        </section>
                    </div>
                </section>

                <h1 className='ml-5 text-xl font-bold'>Questions</h1>

                <section className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col bg-white m-5 mt-2 p-5 rounded-md w-auto lg:w-11/12'>
                        <h2>Ask Question</h2>
                        <div className='grid w-24 leading-10 my-3'>
                            <button>
                                <input type="radio" name="option" className="mr-2" /> Option
                            </button>
                            <button>
                                <input type="radio" name="option" className="mr-2" /> Option
                            </button>
                        </div>
                        <div className="flex justify-between border-t-2 pt-3">
                            <section className="flex">
                                <button><Image src={'/format_bold.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /></button>
                                <button><Image src={'/format_italic.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /></button>
                                <button><Image src={'/format_underlined.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /></button>
                            </section>
                            <section className="flex">
                                <button><Image src={'/content_copy.svg'} alt='...' width={10} height={10} className='h-5 w-5 mr-2' /></button>
                                <button><Image src={'/delete.svg'} alt='...' width={10} height={10} className='h-5 w-5' /></button>
                            </section>
                        </div>
                    </div>
                    <button className='bg-purple-800 text-white mr-5 my-5 p-5 rounded-full w-14 h-14 hidden lg:flex items-center justify-center'><Image src={'/add.svg'} alt='...' width={100} height={100} /></button>
                    <div className="mx-5 pb-5 flex lg:hidden">
                        <button className="w-1/2 p-2 mr-2 border-2 border-purple-800 hover:bg-purple-800 text-purple-800 hover:text-white rounded-md" onClick = {() => setShowModal(true)}>Preview</button>
                        <button className="w-full p-2 bg-purple-800 text-white rounded-md">Publish NFT</button>
                    </div>
                </section>
            </div>
            <Modal isVisible ={showModal} onClose = {()=> setShowModal(false)} />
        </Fragment>
    )
}
export default page;