const page = ()=> {
    return(
        <div className='flex flex-col text-black pt-10 lg:p-0'>
            <div className="w-1/3 mr-5 pt-5 hidden lg:flex self-end">
                <button className="w-full p-2 mr-2 border-2 border-purple-800 hover:bg-purple-800 text-purple-800 hover:text-white rounded-md">Preview</button>
                <button className="w-full p-2 bg-purple-800 text-white rounded-md">Publish NFT</button>
            </div>
            <section className='bg-white m-5 p-5 rounded-md'>
                <h1 className="font-bold text-lg ml-2">Create New Item</h1>
                <div className="flex flex-col lg:flex-row">
                    <section className="h-[45vh] lg:h-auto flex text-xs flex-col items-center justify-center border-2 border-dashed rounded-md m-2 w-full lg:w-1/2">
                        <p>Drag and Drop or <span className='text-purple-800 font-bold'>Browse</span></p>
                        <p>Image(NFTs Assets)</p>
                        <p className='text-center'>File types supported: JPG, PNG, PDF | Max size: 50MB</p>
                    </section>
                    <section className="flex flex-col m-2 w-full lg:w-1/2">
                        <label htmlFor="NFTname">NFT Name</label>
                        <input type="text" placeholder='Enter Name' className='p-2 border-2 rounded-md' />
                        <div className="flex flex-wrap my-4">
                            <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 mr-2 border-2 hover:border-purple-800 rounded-md'>Free</button>
                            <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 mr-3 border-2 hover:border-purple-800 rounded-md'>Fixed price</button>
                            <button className='flex items-center justify-center p-2 hover:text-purple-800 my-1 border-2 hover:border-purple-800 rounded-md'>Open For Bid</button>
                        </div>
                        <h1 className='mb-1'>Minting Name Positioning</h1>
                        <div className="flex justify-between">
                            <button className="flex w-full items-center justify-center p-2 text-purple-800 border-2 rounded-md">A</button>
                            <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md">B</button>
                            <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md">C</button>
                            <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md">D</button>
                            <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md">E</button>
                            <button className="flex w-full items-center justify-center p-2 ml-1 lg:ml-2 text-purple-800 border-2 rounded-md">F</button>
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
                            <button>B</button>
                            <button>I</button>
                            <button>U</button>
                        </section>
                        <section className="flex">
                            <button>Y</button>
                            <button>Z</button>
                        </section>
                    </div>
                </div>
                <button className='bg-purple-800 text-white mr-5 my-5 p-5 rounded-full w-14 h-14 hidden lg:flex items-center justify-center'>+</button>
                <div className="mx-5 pb-5 flex lg:hidden">
                    <button className="w-1/2 p-2 mr-2 border-2 border-purple-800 hover:bg-purple-800 text-purple-800 hover:text-white rounded-md">Preview</button>
                    <button className="w-full p-2 bg-purple-800 text-white rounded-md">Publish NFT</button>
                </div>
            </section>
        </div>
    )
}
export default page;