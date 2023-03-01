import React from 'react'
import TableFilters from './TableFilters'
import TableHeader from './TableHeader'

const Table = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-4'>
            <TableHeader />
            <TableFilters />
            <table className='mt-5 w-full'>
                <thead>
                    <tr>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>full name</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>first name</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>last name</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>company name</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>account manager</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>industry</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>birthday</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>title/ role</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>email</th>
                        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 border border-gray-100'>Dusan Tomorovic</td>
                        <td className='p-2 border border-gray-100'>Dusan</td>
                        <td className='p-2 border border-gray-100'>Tomorovic</td>
                        <td className='p-2 border border-gray-100'>dusandsg</td>
                        <td className='p-2 border border-gray-100'>Toufic Araman</td>
                        <td className='p-2 border border-gray-100'>Design</td>
                        <td className='p-2 border border-gray-100'>11.04.1990</td>
                        <td className='p-2 border border-gray-100'>Senior Designer</td>
                        <td className='p-2 border border-gray-100'>dusandsg@gmail.com</td>
                        <td className='p-2 border border-gray-100'>Toufic</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-100'>Dusan Tomorovic</td>
                        <td className='p-2 border border-gray-100'>Dusan</td>
                        <td className='p-2 border border-gray-100'>Tomorovic</td>
                        <td className='p-2 border border-gray-100'>dusandsg</td>
                        <td className='p-2 border border-gray-100'>Toufic Araman</td>
                        <td className='p-2 border border-gray-100'>Design</td>
                        <td className='p-2 border border-gray-100'>11.04.1990</td>
                        <td className='p-2 border border-gray-100'>Senior Designer</td>
                        <td className='p-2 border border-gray-100'>dusandsg@gmail.com</td>
                        <td className='p-2 border border-gray-100'>Toufic</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-100'>Dusan Tomorovic</td>
                        <td className='p-2 border border-gray-100'>Dusan</td>
                        <td className='p-2 border border-gray-100'>Tomorovic</td>
                        <td className='p-2 border border-gray-100'>dusandsg</td>
                        <td className='p-2 border border-gray-100'>Toufic Araman</td>
                        <td className='p-2 border border-gray-100'>Design</td>
                        <td className='p-2 border border-gray-100'>11.04.1990</td>
                        <td className='p-2 border border-gray-100'>Senior Designer</td>
                        <td className='p-2 border border-gray-100'>dusandsg@gmail.com</td>
                        <td className='p-2 border border-gray-100'>Toufic</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table