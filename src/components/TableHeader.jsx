import Image from 'next/image'
import React from 'react'
import TableHeaderTab from './TableHeaderTab'

const TableHeader = () => {
    return (
        <div className='flex gap-3'>
            <Image
                src='/Assets/Group 3.svg'
                width={22}
                height={17}
                alt='vector'
            />
            <div className='border-b border-[#C0E3E5] flex w-full'>
                <TableHeaderTab name='all contacts' />
                <TableHeaderTab name='my contacts' />
                <TableHeaderTab name='custom view 1' />
                <TableHeaderTab name='custom view 2' />
                <Image
                    src='/Assets/plus.svg'
                    width={16}
                    height={16}
                    alt='plus'
                    className='mx-2'
                />
            </div>
        </div>
    )
}

export default TableHeader