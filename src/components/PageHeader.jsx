import Link from 'next/link'
import React from 'react'

const PageHeader = () => {
    return (
        <div className='max-w-[1440px] flex justify-between items-center mx-auto py-4'>
            <div>Main view/ Contacts</div>
            <div className='flex flex-col gap-3'>
                <Link href='/createform' className='p-2 uppercase border-2 border-black'>Create contact</Link>
                <Link href='createpdf' className='p-2 uppercase border-2 border-black'>Create PDF</Link>
            </div>
        </div>
    )
}

export default PageHeader