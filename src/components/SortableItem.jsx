import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem({ item }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <th className='uppercase border border-gray-100 p-2 bg-[#C0E3E5] cursor-grab ' ref={setNodeRef} style={style}>
            <button
                {...listeners}
                {...attributes}
                className="p-2 cursor-grab button-drag-hor">
                <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1" cy="1" r="1" fill="#322625" />
                    <circle cx="1" cy="5" r="1" fill="#322625" />
                    <circle cx="1" cy="9" r="1" fill="#322625" />
                    <circle cx="5" cy="1" r="1" fill="#322625" />
                    <circle cx="5" cy="5" r="1" fill="#322625" />
                    <circle cx="5" cy="9" r="1" fill="#322625" />
                </svg>
            </button>
            {item.label}

        </th>
    );
}