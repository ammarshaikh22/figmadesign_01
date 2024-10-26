import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='relative mt-10'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src='/logo.png' alt='logo' width={50} height={50} />
                    </div>
                    <div>
                        <nav>
                            <ul className='flex justify-center items-center gap-8'>
                                <Link href='/'>
                                    <li>Work</li>
                                </Link>
                                <Link href='/about'>
                                    <li>About</li>
                                </Link>
                                <Link href='/'>
                                    <li>Playground</li>
                                </Link>
                                <Link href='/contact'>
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header