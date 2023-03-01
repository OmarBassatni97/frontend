import React from 'react'
import TableFilters from './TableFilters'
import TableHeader from './TableHeader'

const Table = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-4'>
            <TableHeader />
            <TableFilters />
        </div>
    )
}

export default Table