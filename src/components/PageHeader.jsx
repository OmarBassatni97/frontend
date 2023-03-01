import React from 'react'

const PageHeader = () => {
    return (
        <div className='max-w-[1440px] flex justify-between items-center mx-auto py-4'>
            <div>Main view/ Contacts</div>
            <div>
                <button className='p-2 uppercase border-2 border-black'>Create contact</button>
            </div>
        </div>
    )
}

export default PageHeader