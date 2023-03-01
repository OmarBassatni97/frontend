import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[100px]'>
            <nav className='max-w-[1440px] h-full mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image
                        src='/Assets/logo.svg'
                        width={52}
                        height={42}
                        alt='logo'
                    />
                    <ul className='flex'>
                        <li className='uppercase px-2'>companies</li>
                        <li className='uppercase px-2'>contacts</li>
                        <li className='uppercase px-2'>deals</li>
                        <li className='uppercase px-2'>parent co</li>
                        <li className='uppercase px-2'>prospects</li>
                        <li className='uppercase px-2'>projects</li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <Image
                        src='/Assets/search.svg'
                        width={24}
                        height={24}
                        alt='search'
                    />
                    <Image
                        src='/Assets/help.svg'
                        width={24}
                        height={24}
                        alt='help'
                    />
                    <Image
                        src='/Assets/bell.svg'
                        width={24}
                        height={24}
                        alt='bell'
                    />
                    <Image
                        src='/Assets/Image 3.svg'
                        width={24}
                        height={24}
                        alt='bell'
                    />
                    <Image
                        src='/Assets/Group 3.svg'
                        width={24}
                        height={24}
                        alt='bell'
                    />
                </div>
            </nav>
        </div>
    )
}

export default Navbar