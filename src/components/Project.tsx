import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = ({ heading, textOne, textTwo, linkText, img }: { heading: string, textOne: string, textTwo: string | null, linkText: string, img: string }) => {
    return (
        <section className='relative my-20'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex md:flex-row flex-col justify-between md:gap-20 gap-14'>
                    <div>
                        <h3 className='text-[18px] mb-10'>{heading}</h3>
                        <p className='text-[18px] mb-10'>{textOne}</p>
                        {
                            textTwo &&
                            <p className='text-[14px] text-[#606060]'>{textTwo}</p>
                        }
                        <p className={`${textTwo ? 'md:mt-32 mt-20' : 'md:mt-52 mt-20'}`}><Link href='/' className='text-[18px] underline '>{linkText}</Link></p>
                    </div>
                    <div className='md:min-w-[640px] md:min-h-[364px]'>
                        <Image src={img} alt='img' width={640} height={364} />
                    </div>
                </div>
                <hr className='w-full mt-20 border-[1px] border-black' />
            </div>
        </section>
    )
}

export default Project