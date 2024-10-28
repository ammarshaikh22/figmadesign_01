import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <section className='relative md:mt-28 '>
      <div className='max-w-[88%] mx-auto'>
        <div className='md:w-[70%]'>
          <div className='flex justify-between gap-10'>
            <h5 className='underline text-[18px] font-semibold mb-10'>Main Software</h5>
            <div>
              <p className='text-[14px] mb-6 md:max-w-[65%]'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
              <p className='text-[14px]'>Adobe CC, Figma, Ableton</p>
            </div>
          </div>
          <div className='flex mt-14 md:gap-32 gap-8'>
            <h5 className='underline text-[18px] font-semibold mb-10'>Main Skills</h5>
            <p className='text-[14px] mb-6 md:max-w-[45%]'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</p>
          </div>
        </div>
        <hr className='w-full mt-20 border-[1px] border-black' />
        <div className='flex justify-between items-center mt-20 md:flex-row flex-col'>
          <div className='relative'>
            <h6 className='text-[32px] md:max-w-[60%]'>I am thrilled to answer to your next project</h6>
            <Image src='/icon.png' alt='icon' width={20} height={10} className='md:-rotate-90 absolute md:right-[310px] md:top-[66px] right-[10px] top-[66px]' />
          </div>
          <div className='md:mt-0 mt-6'>
            <p className='md:text-[32px] text-2xl'>ammarshaikh50099@gmail.com</p>
            <span className='text-[14px]'>View Resume</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info