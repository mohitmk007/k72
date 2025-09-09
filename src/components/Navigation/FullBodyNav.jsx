import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react'
import { NavContextData } from '../../context/CreateContext';

const FullBodyNav = () => {
    const { isOpen, setIsOpen } = useContext(NavContextData);
    const stairParentRef = useRef(null)
    const fullNavRef = useRef(null)
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .from(".stairLine", {
                height: 0,
                stagger: { amount: -0.3 },
            })
            .from(fullNavRef.current, {
                opacity: 0,
            })
            .from(".link", {
                y: 100,
                opacity: 0,
                rotateX: 90,
                stagger: { amount: 0.3 },
            });
    }, []);

    useEffect(() => {
        if (!tl.current) return;

        if (isOpen) {
            tl.current.play(); // play forward
        } else {
            tl.current.reverse(); // play backward
        }
    }, [isOpen]);
    return (
        <div className='text-white h-screen z-50 w-full absolute '>
            <div ref={stairParentRef} className='h-screen w-full fixed'>
                <div className="h-full w-full flex fixed">
                    <div className="stairLine h-full w-1/5 bg-black"></div>
                    <div className="stairLine h-full w-1/5 bg-black"></div>
                    <div className="stairLine h-full w-1/5 bg-black"></div>
                    <div className="stairLine h-full w-1/5 bg-black"></div>
                    <div className="stairLine h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={fullNavRef} className='relative'>
                <div className='flex items-top justify-between '>
                    <div>
                        <div className="w-36 m-2 ">
                            <svg className='w-full' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='text-[10vw] flex items-top'>
                        <button onClick={() => setIsOpen(!isOpen)} className="relative w-[10vw] h-[10vw] cursor-pointer">
                            <span className="absolute left-0 top-1/2 block h-[2px] w-full bg-white rotate-45"></span>
                            <span className="absolute left-0 top-1/2 block h-[2px] w-full bg-white -rotate-45"></span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='link origin-top relative  border-t-[1px] border-gray-600 overflow-hidden'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>projects</h1>
                        <div className="moveLink absolute flex top-0 text-black bg-[#d3fd50]">
                            <div className="moveHeading flex items-center">
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>

                                {/* 🔁 duplicate content for seamless loop */}
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative  border-t-[1px] border-gray-600  overflow-hidden '>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>projects</h1>
                        <div className="moveLink absolute flex top-0 text-black bg-[#d3fd50]">
                            <div className="moveHeading flex items-center">
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>

                                {/* 🔁 duplicate content for seamless loop */}
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative  border-y-[1px] border-gray-600 overflow-hidden'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>projects</h1>
                        <div className="moveLink absolute flex top-0 text-black bg-[#d3fd50]">
                            <div className="moveHeading flex items-center">
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>

                                {/* 🔁 duplicate content for seamless loop */}
                                <div className="flex items-center">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase">
                                        Lorem, ipsum dolor.
                                    </h2>
                                    <img
                                        className="h-32 rounded-full shrink-0 w-96 object-cover"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FullBodyNav
