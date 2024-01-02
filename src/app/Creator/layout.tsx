import React from "react"

export const metadata: Metadata = {
    tittle: 'Decertify',
    description: ''
}

export default function Rootlayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en" className='bg-[#EDEDED] fixed overflow-hidden'>
            <body className={inter.className}>
                <div className=' flex'>
                    <Sidebar />
                    <Mobilebar />
                    <div className='w-full '>
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}