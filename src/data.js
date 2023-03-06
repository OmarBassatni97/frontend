import { createContext, useState, useEffect } from 'react'

export const TabsStore = createContext(null)

export const TabsProvider = props => {
    const [items, setItems] = useState([
        {
            id: 1,
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',

        },
        {
            id: 2,
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',

        },

        {
            id: 3,
            full_name: 'Dusan Tomanovic',
            first_name: 'Dusan',
            last_name: 'Tomanovic',

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

    ])


    return (
        <TabsStore.Provider value={{ items, setItems, columns, setColumns }}>{props.children}</TabsStore.Provider>
    )
}

