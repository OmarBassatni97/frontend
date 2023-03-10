import React from 'react'
import { useFormContext } from 'react-hook-form';

const TextAreaField = ({ label, name, type }) => {
    const { register, formState } = useFormContext();
    const { errors } = formState
    return (
        <div className='my-2'>
            <span>{label}</span>
            <textarea className='w-full p-2 border' type={type}  {...register(name)} />
            {errors[name] ? <p className='text-red-400'>Required</p> : ''}
        </div>
    )
}

export default TextAreaField