import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <span className='uppercase border border-gray-100 p-2 bg-[#C0E3E5]'>{props.id}</span>
            </div>
    );
}