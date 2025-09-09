import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='font-[font1] pt-3 text-center'>
            <div className='uppercase text-[10vw] leading-[9vw]'>L'étincelle</div>
            <div className='uppercase text-[10vw] leading-[9vw] flex justify-center items-center'>
                qui 
                <div className='h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden'> 
                    <Video /> 
                </div> génère
                </div>
            <div className='uppercase text-[10vw] leading-[9vw]'>la créativité</div>
        </div>
    )
}

export default HomeTopText
