import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative md:mt-40 mt-28'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex md:flex-row flex-col justify-between md:gap-20 gap-10'>
                    <h1 className='text-6xl font-semibold'>Hello, I’m Muhammad Ammar</h1>
                    <p className='text-3xl md:mt-16'>A Front-end Web developer. I’m currently learning Next.js. I’m always Trying to build something new. </p>
                </div>
                <div className='md:mt-24 mt-20'>
                    <Image src='/icon.png' alt='icon' width={20} height={10} />
                </div>
            </div>
        </section>
    )
}

export default Banner