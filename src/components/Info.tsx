import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <section className='mt-28'>
      <div className='max-w-[88%] mx-auto'>
        <div className='w-[70%]'>
          <div className=' flex justify-between gap-10'>
            <h5 className='underline text-[18px] font-semibold mb-10'>Main Software</h5>
            <div>
              <p className='text-[14px] mb-6 max-w-[65%]'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
              <p className='text-[14px]'>Adobe CC, Figma, Ableton</p>
            </div>
          </div>
          <div className='flex mt-14 gap-32'>
            <h5 className='underline text-[18px] font-semibold mb-10'>Main Skills</h5>
            <p className='text-[14px] mb-6 max-w-[45%]'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</p>
          </div>
        </div>
        <hr className='w-full mt-20 border-[1px] border-black' />
        <div className='flex justify-between items-center mt-20'>
          <div className='relative'>
            <h6 className='text-[32px] max-w-[60%]'>I am thrilled to answer to your next project</h6>
            <Image src='/icon.png' alt='icon' width={20} height={10} className='-rotate-90 absolute right-[310px] top-[66px]' />
          </div>
          <div>
            <p className='text-[32px]'>makifkarasu@outlook.com</p>
            <span className='text-[14px]'>View Resume</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info