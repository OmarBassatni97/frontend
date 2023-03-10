import { TabsStore } from '@/data'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import uniqid from 'uniqid'
import InputField from '../InputField'
import SingleSelect from '../SingleSelect'
const ServiceTable = () => {
    const { services, setServices } = useContext(TabsStore)
    const schema = Joi.object({
        service_name: Joi.string().required(),
        units: Joi.number().required(),
        unitPrice: Joi.number().required()

    })
    const methods = useForm({ resolver: joiResolver(schema) });
    function add() {
        setServices(services => [...services, {
            id: uniqid(),
            serviceName: '',
            units: 0,
            unitPrice: 0,

        }])
    }
    const servicesOption = [{ value: 'Service1', label: 'Service1' }]
    return (
        <div>
            <table className='w-full'>
                <thead className={`uppercase text-center cursor-pointer   `}>
                    <tr className='border bg-blue-200'>
                        <th className='p-2 border'>service</th>
                        <th className='p-2 border'>units</th>
                        <th className='p-2 border'>unit price</th>
                    </tr>
                </thead>
                <tbody>

                    {services.map((service) => (
                        <tr className='border' key={service.id}>
                            
                                <td className='border p-1'><SingleSelect name='service_name' options={servicesOption} /></td>
                                <td className='border p-1'><InputField name='units' /></td>
                                <td className='border p-1'><InputField name='unit_price' /></td>
                            

                        </tr>
                    ))}
                    <tr className='border'>
                        <td className='border p-1'><span onClick={add}>Add</span></td>
                        <td className='border p-1'></td>
                        <td className='border p-1'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ServiceTable