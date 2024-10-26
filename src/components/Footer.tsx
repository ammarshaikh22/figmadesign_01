import React from 'react'

const Footer = () => {
    return (
        <footer className='relative mt-32 mb-10'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <p className='text-xl text-[#2429AF] underline'>Mehmet Akif Karasu ⏤ 2020</p>
                    <div>
                        <ul className='flex gap-8 text-xl'>
                            <li>Artstation</li>
                            <li>Linkedin</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer