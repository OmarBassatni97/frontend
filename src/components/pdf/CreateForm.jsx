import React, { useContext } from 'react'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm, FormProvider } from "react-hook-form";

import { TabsStore } from '@/data';
import InputField from '../InputField';
import { useRouter } from 'next/router';
import TextAreaField from '../TextAreaField';




const CreateForm = () => {
    const { setPdfData } = useContext(TabsStore)
    const schema = Joi.object({
        contact_name: Joi.string().required(),
        contact_email: Joi.string().required(),
        company_name: Joi.string().required(),
        date: Joi.date().required(),
        quote_number: Joi.string().required(),
        project_title: Joi.string().required(),
        project_deliverables: Joi.string().required(),



    })

    const { push } = useRouter()

    const methods = useForm({ resolver: joiResolver(schema) });

    const onSubmit = data => {
        setPdfData({
            quote: {
                creator: {
                    contactName: data.contact_name,
                    contactEmail: data.contact_email,
                    companyName: data.company_name,
                    date: data.date,
                    quoteNumber: data.quote_number,
                    projectTitle: data.project_title,
                    projectDeliverables: data.project_deliverables
                },
               
            }
        })

        
            push('/pdf', '/pdf')
       

    }
 
    return (
        <FormProvider {...methods}>
            <form className='max-w-[600px] mx-auto' onSubmit={methods.handleSubmit(onSubmit)}>

                <InputField type='text' label='Contact name' name='contact_name' />
                <InputField type='text' label='Contact email' name='contact_email' />
                <InputField type='text' label='Company name' name='company_name' />
                <InputField type='date' label='date' name='date' />
                <InputField type='text' label='quote number' name='quote_number' />
                <InputField type='text' label='project Title' name='project_title' />
                <TextAreaField label='Project Deliverables' name='project_deliverables' />
                {/* <ServiceTable /> */}

                <button className='flex justify-center w-full p-2 border my-2 hover:bg-slate-200 duration-300' type='submit'>Submit</button>
            </form>
        </FormProvider>

    )
}



export default CreateForm