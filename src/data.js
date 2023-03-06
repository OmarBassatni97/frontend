import { createContext, useState, useEffect } from 'react'

export const TabsStore = createContext(null)

export const TabsProvider = props => {
    const [sortBy, setSortBy] = useState({ col: '', by: 0 })
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
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',
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
            field: 'full',
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
        <TabsStore.Provider value={{ items, setItems, columns, setColumns, sortBy, setSortBy }}>{props.children}</TabsStore.Provider>
    )
}

