import Image from 'next/image'
import React from 'react'

const TableFilters = () => {
    return (
        <div className='flex items-center justify-between  gap-3 py-8'>
            <div className='flex gap-3'>
                <span className='flex gap-1'>50 <Image src='/Assets/Vector 55.svg' height={6} width={6} alt='vector' /> Entries</span>
                <div className='border-x px-3'>
                    <Image
                        src='/Assets/search.svg'
                        width={16}
                        height={16}
                        alt='search'
                    />
                </div>
                <div className='px-2 flex gap-1'>Client Manager <Image src='/Assets/Vector 55.svg' height={4} width={6} alt='vector' /></div>
                <div className='px-2 flex gap-1'>Create Date <Image src='/Assets/Vector 55.svg' height={4} width={6} alt='vector' /></div>
                <div className='px-2 flex gap-1'>Last activity date <Image src='/Assets/Vector 55.svg' height={4} width={6} alt='vector' /></div>
                <div className='px-2 flex gap-1'>Lead Status <Image src='/Assets/Vector 55.svg' height={4} width={6} alt='vector' /></div>
                <div className='px-2 flex gap-1'>Custom Filter <Image src='/Assets/Vector 55.svg' height={4} width={6} alt='vector' /></div>
            </div>


            <div className='flex gap-4'>
                <Image
                    src='/Assets/trash-2.svg'
                    height={24}
                    width={24}
                    alt='trash' />
                <Image
                    src='/Assets/refresh-circle.svg'
                    height={24}
                    width={24}
                    alt='refresh' />
            </div>
        </div>
    )
}

export default TableFilters