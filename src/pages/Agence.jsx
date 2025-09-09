import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {

  const imageDiv = useRef(null);
  const imageRef = useRef(null);



  // const imageArray = [
  //   "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
  // ];

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
       
        start: "top 22%",
        end: "top -140%",
        pin: true,
        onUpdate: (dets) => {
          let imageIndex;
          if (dets.progress < 1) {
            imageIndex = Math.floor(dets.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]

        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDiv} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-40 left-[30vw]'>
          <img ref={imageRef} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="img1" className='h-full w-full' />
        </div>
        <div className='relative font-[font2] '>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className='pl-[40%]  pr-10'>
            <p className='text-[3.3rem] leading-[3.5rem]'>
              &emsp;&emsp;&emsp;&emsp;&emsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence
