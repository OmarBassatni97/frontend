import React, { useContext, useState } from 'react';
import { get } from 'lodash'
import _ from 'lodash'
import TableFilters from './TableFilters'
import TableHeader from './TableHeader'
import DraggableHeaders from './DraggableHeaders';
import { TabsStore } from '@/data';

const Table = () => {

    const { items, columns, setColumns } = useContext(TabsStore)
    return (
        <div className='max-w-[1440px] mx-auto mt-4'>
            <TableHeader />
            <TableFilters />
            <table className='w-full z'>
                <thead>
                    <DraggableHeaders />
                </thead>
                <tbody>
                    {items.map(_item => (
                        <tr>
                            {columns.filter(col => col.visible)
                                .map((col, index) => (
                                    <td key={index} className='text-center border-2 border-gray-100 p-2'>
                                        {_.get(_item, col.render.label, '')}
                                    </td>
                                ))}
                        </tr>
                    ))}

                </tbody>
            </table>


        </div>
    )

}

export default Table