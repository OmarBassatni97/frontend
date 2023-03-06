import { Resizable } from 're-resizable'
import { useContext, useState } from 'react'
import { TabsStore } from '@/data'
import { setWith } from 'lodash'

const ResizableTableCell = ({ children, id, minWidth }) => {
    const { columns, setColumns } = useContext(TabsStore)
    const [width, setWidth] = useState(200)
    return (
        <Resizable
            className="resizable-tabel-cell"
            size={{ width: width }}
            style={{
                overflow: 'hidden',
            }}
            minWidth={minWidth}
            onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width)
            }}
            enable={{
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            }}>
            {children}
        </Resizable>
    )
}

export default ResizableTableCell