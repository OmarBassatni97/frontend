import React from 'react'
import { useFormContext } from 'react-hook-form';

const InputField = ({ label, name }) => {
    const { register, formState } = useFormContext();
    const { errors } = formState
    return (
        <div className='my-2'>
            <span>{label}</span>
            <input className='w-full p-2 border' type="text"  {...register(name)} />
            {errors[name] ? <p className='text-red-400'>First Name is required</p> : ''}
        </div>
    )
}

export default InputField