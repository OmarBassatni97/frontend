import React, { useState } from 'react';
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
import { columns } from '../data'
import TableFilters from './TableFilters'
import TableHeader from './TableHeader'

const Table = () => {
    const [items, setItems] = useState(columns);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
   
    return (
        <div className='max-w-[1440px] mx-auto mt-4'>
            <TableHeader />
            <TableFilters />
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={items}
                    strategy={horizontalListSortingStrategy}
                >
                    <div className='flex mt-7'>
                        {items.map((item, index) => <SortableItem key={index} id={item} />)}
                    </div>

                </SortableContext>
            </DndContext>
        </div>
    )
    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}

export default Table