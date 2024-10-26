import Link from 'next/link'
import React from 'react'

const Project = ({ heading, textOne, textTwo, linkText }: { heading: string, textOne: string, textTwo: string | null, linkText: string }) => {
    return (
        <section className='relative my-20'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between gap-20'>
                    <div>
                        <h3 className='text-[18px] mb-10'>{heading}</h3>
                        <p className='text-[18px] mb-10'>{textOne}</p>
                        {
                            textTwo &&
                            <p className='text-[14px] text-[#606060]'>{textTwo}</p>
                        }
                        <p className={`${textTwo ? 'mt-32' : 'mt-52'}`}><Link href='/' className='text-[18px] underline '>{linkText}</Link></p>
                    </div>
                    <div className='min-w-[640px] h-[364px] bg-[#606060]'></div>
                </div>
                <hr className='w-full mt-20 border-[1px] border-black' />
            </div>
        </section>
    )
}

export default Project