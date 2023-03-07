import React from 'react'
import { useFormContext } from 'react-hook-form';

const InputField = ({ label, name }) => {
    const { register } = useFormContext();
    return (
        <div className='my-2'>
            <span>{label}</span>
            <input className='w-full p-2 border' type="text"  {...register(name)} />
        </div>
    )
}

export default InputField