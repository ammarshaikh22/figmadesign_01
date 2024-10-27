'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <header className='relative pt-10'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src='/logo.png' alt='logo' width={50} height={50} />
                    </div>
                    <nav className='md:block hidden'>
                        <ul className='flex justify-center items-center gap-10'>
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
                    <div className='md:hidden block'>
                        {
                            menu ? <CloseIcon onClick={() => setMenu(!menu)} className='cursor-pointe text-3xl fixed top-10 right-6 z-20' /> : <MenuOpenIcon onClick={() => setMenu(!menu)} className='cursor-pointe text-3xl' />
                        }
                    </div>

                    <nav className={`md:hidden block fixed z-10 w-[80%] top-0 right-0 h-screen bg-[#dfdfdf] transform transition-transform duration-300  ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
                        {menu ?
                            <ul className='flex flex-col gap-12 justify-center items-center h-full text-xl'>
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
                            </ul> : null}
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header