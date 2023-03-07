import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';
const MultiSelect = ({ options, name }) => {
    const { control, formState } = useFormContext();
    const { errors } = formState
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Select
                        className='my-2'
                        {...field}
                        isMulti
                        options={options}
                    />
                )}
            />
            {errors[name] ? <p className='text-red-300'>Required</p> : ''}
        </>


    )
}

export default MultiSelect