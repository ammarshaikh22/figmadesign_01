import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative mt-40'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between gap-20'>
                    <h1 className='text-6xl font-semibold'>Hello, I’m Mehmet Akif.</h1>
                    <p className='text-3xl mt-16'>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
                </div>
                <div className='mt-24'>
                    <Image src='/icon.png' alt='icon' width={20} height={10} />
                </div>
            </div>
        </section>
    )
}

export default Banner