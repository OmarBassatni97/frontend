import React, { useContext, useEffect, useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';
import { TabsStore } from '@/data';



const DraggableHeaders = () => {

    const { columns,setColumns } = useContext(TabsStore)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (

        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <tr>
                <SortableContext
                    items={columns}
                    strategy={horizontalListSortingStrategy}
                >

                    {columns?.filter(col => col.visible).map((item, index) => (
                        <SortableItem key={index} item={item} />
                    ))}
                </SortableContext>
            </tr>
        </DndContext>

    )
    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setColumns((items) => {
                const oldIndex = items.map(item => item.id).indexOf(active.id)
                const newIndex = items.map(item => item.id).indexOf(over.id)

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}

export default DraggableHeaders