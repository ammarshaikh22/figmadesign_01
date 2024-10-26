import React from 'react'
import Image from 'next/image'
const AboutMe = () => {
    return (
        <section className='relative mt-40'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between gap-20'>
                    <div>
                        <h2 className='text-6xl font-semibold mb-10'>Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.</h2>
                        <p className='text-3xl'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production. <br /> <br /> Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
                    </div>
                    <div className='min-w-[421px] min-h-[590px]'>
                        <Image src='/Profile.png' alt='profile' width={421} height={590} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe