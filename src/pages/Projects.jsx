import React, { useRef } from 'react'
import ImagesCard from '../components/projects/ImagesCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {
  const imageList = [
    {
      img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg"
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg"
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg"
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg"
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".imageBox")

    // Set all boxes to initial state
    boxes.forEach((box) => {
      gsap.set(box, { height: "200px" })
    })

    boxes.forEach((box, i) => {
      ScrollTrigger.create({
        trigger: box,
        start: "top 40%",
        end: "+=1",
        onEnter: () => {
          boxes.forEach((b, index) => {
            if (index === i) {
              gsap.to(b, {
                height: "600px",

                duration: 0.5,
                ease: "expoScale(0.5,7,none)",
              })
            } else {
              gsap.to(b, {
                height: "200px",

                duration: 0.5,
                ease: "expoScale(0.5,7,none)",
              })
            }
          })
        },
        onEnterBack: () => {
          boxes.forEach((b, index) => {
            if (index === i) {
              gsap.to(b, {
                height: "600px",

                duration: 0.5,
                ease: "expoScale(0.5,7,none)",
              })
            } else {
              gsap.to(b, {
                height: "200px",

                duration: 0.5,
                ease: "expoScale(0.5,7,none)",
              })
            }
          })
        }
      })
    })
  })
  const imageNav = useRef(null)
  const handleMouseEnter = () => {
    gsap.to(imageNav.current, { top: '0px', duration: 0.3, ease: 'power2.out' });
  }
  const handleMouseLeave = () => {
    gsap.to(imageNav.current, { top: '-120px', duration: 0.3, ease: 'power2.in' });
  }

  return (
    <div className=' relative'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font2] text-[12vw] uppercase'>Projects</h2>
      </div>
      <div ref={imageNav} className='h-[120px] w-full fixed z-10 bg-white' style={{ top: '-120px' }}>
        <div className='h-1/2 mt-[60px] w-full  flex items-center justify-between border-y-2 font-[font2] '>
          <h2 className='text-3xl'>Project Name</h2>
          <h2 className='text-3xl'>Project Details</h2>
          <h2 className='text-3xl'>2025</h2>
        </div>
      </div>

      <div className='imageDiv -mt-17'>
        {imageList.map((elem, idx) => (
          <div key={idx} className='imageBox w-full h-[550px] mb-4 flex gap-2 overflow-hidden p-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ImagesCard img1={elem.img1} img2={elem.img2} />
          </div>
        ))}
      </div>

      <div>
        <h2 className='text-black text-9xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem aliquam. Harum, incidunt veritatis possimus nulla vitae error numquam expedita rem atque quia iure obcaecati natus nesciunt maiores explicabo. Vel, eius ex distinctio adipisci quo assumenda tempora amet. Dolore aliquam non id cum ratione voluptates hic odit officiis, nam iusto?
        </h2>
      </div>
    </div>
  )
}

export default Projects
