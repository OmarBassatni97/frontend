import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
const SingleSelect = ({ options, name }) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Select
                    className='my-2'
                    {...field}
                    isClearable
                    defaultValue={options[0]}
                    options={options}
                />
            )}
        />
    )
}

export default SingleSelect