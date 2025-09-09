import React from 'react'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video className='w-full h-full object-cover' autoPlay muted loop src='../../../public/video.mp4'></video>
        </div>
    )
}

export default Video