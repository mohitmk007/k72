import React from 'react'

const ImagesCard = ({ img1, img2 }) => {
    return (
        <>
            <div className='w-1/2  group transition-all relative rounded-none hover:rounded-[60px] overflow-hidden '>
                <img className='h-full w-full object-cover' src={img1} alt="" />
                <div className='h-full w-full opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/35'>
                    <h1 className='uppercase text-6xl font-[font1] pt-4 px-8 text-white border-4  rounded-full'> Lorem, ipsum dolor.</h1>
                </div>
            </div>
            <div className='w-1/2  group transition-all relative rounded-none hover:rounded-[60px] overflow-hidden '>
                <img className='h-full w-full object-cover' src={img2} alt="" />
                <div className='h-full w-full opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/35'>
                    <h1 className='uppercase text-6xl font-[font1] pt-4 px-8 text-white border-4  rounded-full'> Lorem, ipsum dolor.</h1>
                </div>
            </div>
        </>
    )
}

export default ImagesCard
