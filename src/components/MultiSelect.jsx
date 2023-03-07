import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';
const MultiSelect = ({ options, name }) => {
    const { control } = useFormContext();
    return (
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

    )
}

export default MultiSelect