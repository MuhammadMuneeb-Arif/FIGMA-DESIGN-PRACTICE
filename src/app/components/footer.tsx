import React from 'react'

const footer=() => {
    return (
        <div className='w-full  bg-[#0C001B] '>
            {/*  first  footer for large devices */}
            <div className='pt-0 pb-5 px-0 hidden md:block '>
                <div className='flex  justify-around  align-top'>
                    <h1 className='font-bold text-4xl text-white'>AI Frame</h1>
                    <div className='flex   gap-8  '>
                        <div className='text-white '>
                            <h1 className=' text-2xl font-semibold '>Company</h1>
                            <div className='flex flex-col gap-3 mt-3 text-xs'>
                                <a href='#' className='text-base cursor-pointer hover:underline'>About Us</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>Contact</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>pricing</a>

                            </div>
                        </div>
                        <div className='text-white '>
                            <h1 className=' text-2xl font-semibold '>Information</h1>
                            <div className='flex flex-col gap-3 mt-3 text-xs'>
                                <a href='#' className='text-base cursor-pointer hover:underline'>FAQS</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>Help center</a>


                            </div>
                        </div>


                    </div>
                    <div className='flex gap-4 flex-col'>
                        <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                            <div className=' bg-[#14092e] rounded-full p-2'>

                                <img src="/Vector (1).png" alt="icons" className='size-5' />
                            </div>
                        </div>
                        <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                            <div className=' bg-[#14092e] rounded-full p-2'>

                                <img src="/Vector (2).png" alt="icons" className='size-5' />
                            </div>
                        </div>
                        <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                            <div className=' bg-[#14092e] rounded-full p-2'>

                                <img src="/Vector (3).png" alt="icons" className='size-5' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-around  text-sm text-white mt-10'>
                    <h5>Trems and Condition</h5>
                    <h5>Copyright 2024</h5>
                    <h5>Privacy Poicy</h5>
                </div>
            </div>
            {/* second footer for mobiles */}

            <div className='pt-0 pb-5 px-0 md:hidden '>
                <div className='flex justify-center items-center'>

                    <h1 className='font-bold items-center justify-center text-4xl text-white'>AI Frame</h1>
                </div>
                <div className='px-8 py-2 mt-10'>

                    <div className='flex  gap-8  justify-center '>
                        <div className='text-white '>
                            <h1 className=' text-2xl font-semibold '>Company</h1>
                            <div className='flex flex-col gap-5 mt-3 text-xs'>
                                <a href='#' className='text-base cursor-pointer hover:underline'>About Us</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>Contact</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>pricing</a>

                            </div>
                        </div>
                        <div className='text-white '>
                            <h1 className=' text-2xl font-semibold '>Information</h1>
                            <div className='flex flex-col gap-5 mt-3 text-xs'>
                                <a href='#' className='text-base cursor-pointer hover:underline'>FAQS</a>
                                <a href='#' className='text-base cursor-pointer hover:underline'>Help center</a>


                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex gap-4  items-center justify-center px-8  mt-8'>
                    <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                        <div className=' bg-[#14092e] rounded-full p-2'>

                            <img src="/Vector (1).png" alt="icons" className='size-5' />
                        </div>
                    </div>
                    <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                        <div className=' bg-[#14092e] rounded-full p-2'>

                            <img src="/Vector (2).png" alt="icons" className='size-5' />
                        </div>
                    </div>
                    <div className='bg-blue-russian-gradient rounded-full p-[1px] shadow-custom-purple'>
                        <div className=' bg-[#14092e] rounded-full p-2'>

                            <img src="/Vector (3).png" alt="icons" className='size-5' />
                        </div>
                    </div>
                </div>



                <div className='flex items-center justify-around  text-xs px-3 text-white mt-10'>
                    <h5>Trems and Condition</h5>
                    <h5>Copyright 2024</h5>
                    <h5>Privacy Poicy</h5>
                </div>
            </div>
        </div>

    )
}

export default footer