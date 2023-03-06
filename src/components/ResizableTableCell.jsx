import { Resizable } from 're-resizable'
import { useContext } from 'react'
import { TabsStore } from '@/data'

const ResizableTableCell = ({ children, id, minWidth }) => {
    const {columns,setColumns} = useContext(TabsStore)
    return (
        <Resizable
            className="resizable-tabel-cell"
            size={{
                width: columns.filter(column => column.id === id)[0]
                    .width,
            }}
            style={{
                overflow: 'hidden',
            }}
            minWidth={minWidth}
            onResizeStop={(e, direction, ref, d) => {
                setColumns(
                   columns.map(obj => {
                        if (obj.id === id) {
                            return {
                                ...obj,
                                width: columns.filter(
                                    column => column.id === id,
                                )[0].width
                                    ? columns.filter(
                                          column => column.id === id,
                                      )[0].width + d.width
                                    : d.width,
                            }
                        }
                        return obj
                    }),
                )
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