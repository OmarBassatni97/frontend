import React, { useContext } from 'react'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm, FormProvider } from "react-hook-form";

import { TabsStore } from '@/data';

import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import InputField from './InputField';

const CreateForm = () => {
    const { gender, companies } = useContext(TabsStore)
    const schema = Joi.object({
        first_name: Joi.string().required(),
        companies: Joi.array().min(1).required(),
        gender: Joi.required()
    })

    const methods = useForm({ resolver: joiResolver(schema) });
    const onSubmit = data => console.table(data);

    return (
        <FormProvider {...methods}>
            <form className='max-w-[600px] mx-auto' onSubmit={methods.handleSubmit(onSubmit)}>

                <InputField label='First name' name='first_name' />
                <SingleSelect options={gender} name='gender' />
                <MultiSelect options={companies} name='companies' />

                <button className='flex justify-center w-full p-2 border my-2' type='submit'>Submit</button>
            </form>
        </FormProvider>

    )
}



export default CreateForm