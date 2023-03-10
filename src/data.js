import { createContext, useState, useEffect } from 'react'

export const TabsStore = createContext(null)

export const TabsProvider = props => {
    const [sortBy, setSortBy] = useState({ col: '', by: 0 })
    const [services, setServices] = useState(
        [
            { name: 'Service1', units: '3', unitPrice: '12' },
            { name: 'Service2', units: '3', unitPrice: '12' },
            { name: 'Service3', units: '3', unitPrice: '12' },
            { name: 'Service4', units: '3', unitPrice: '12' },
            { name: 'Service5', units: '3', unitPrice: '12' },
            { name: 'Service6', units: '3', unitPrice: '12' },
            { name: 'Service7', units: '3', unitPrice: '12' },
            { name: 'Service8', units: '3', unitPrice: '12' },
            { name: 'Service9', units: '3', unitPrice: '12' },
            { name: 'Service10', units: '3', unitPrice: '12' },
            

        ])
    const [gender, setGender] = useState([
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ])
    const [companies, setCompanies] = useState([
        { value: 'company1', label: 'Company1' },
        { value: 'company2', label: 'Company2' },
        { value: 'company3', label: 'Company3' },
        { value: 'company4', label: 'Company4' }
    ])
    const [pdfData, setPdfData] = useState({})

    const [items, setItems] = useState([
        {
            id: 1,
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',
            company: 'Klynn',
            cm_team: 'Mais Ramadan',
            vip: 'NO'

        },
        {
            id: 2,
            full_name: 'Omar Bassatni',
            first_name: 'Omar',
            last_name: 'Bassatni',
            company: 'Klynn',
            cm_team: 'Mais Ramadan',
            vip: 'NO'

        },

        {
            id: 3,
            full_name: 'Wissam Nseir',
            first_name: 'Wissam',
            last_name: 'Nseir',
            company: 'Klynn',
            cm_team: 'Mais Ramadan',
            vip: 'NO'

        },
        {
            id: 4,
            full_name: 'Tiffany Koh',
            first_name: 'Tiffany',
            last_name: 'Koh',
            company: 'Klynn',
            cm_team: 'Mais Ramadan',
            vip: 'NO'

        },
        {
            id: 5,
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',
            company: 'Klynn',
            cm_team: 'Mais Ramadan',
            vip: 'NO'

        },



    ])
    const [columns, setColumns] = useState([
        {
            label: 'ID',
            field: 'id',
            type: 'number',
            id: 1,
            visible: true,
            render: {
                type: 'link',
                href: '/quotes/',
                hrefParam: 'id',
                label: 'id',
            },
        },
        {
            label: 'Full name',
            field: 'full_name',
            id: 2,
            visible: true,
            render: {
                type: 'link',
                href: '/quotes/',
                hrefParam: 'id',
                label: 'full_name',
            },
        },
        {
            label: 'First name',
            field: 'first_name',
            id: 3,
            visible: true,
            render: {
                type: 'link',
                href: '/companies/',
                hrefParam: 'deal.company.id',
                label: 'first_name',
            },
        },
        {
            label: 'Last name',
            field: 'last_name',
            id: 4,
            visible: true,
            render: {
                type: 'link',
                href: '/deals/',
                hrefParam: 'deal.id',
                label: 'last_name',
            },
        },
        {
            label: 'Company',
            field: 'company',
            id: 5,
            visible: true,
            render: {
                type: 'link',
                href: '/companies/',
                hrefParam: 'deal.company.id',
                label: 'company',
            },
        },
        {
            label: 'cm team',
            field: 'cm_team',
            id: 6,
            visible: true,
            render: {
                type: 'link',
                href: '/companies/',
                hrefParam: 'deal.company.id',
                label: 'cm_team',
            },
        },
        {
            label: 'vip',
            field: 'vip',
            id: 7,
            visible: true,
            render: {
                type: 'link',
                href: '/companies/',
                hrefParam: 'deal.company.id',
                label: 'vip',
            },
        },

    ])


    return (
        <TabsStore.Provider value={{ services, setServices, pdfData, setPdfData, items, setItems, columns, setColumns, sortBy, setSortBy, gender, setGender, companies, setCompanies }}>{props.children}</TabsStore.Provider>
    )
}

