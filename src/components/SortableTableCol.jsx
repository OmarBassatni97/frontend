import { useContext, useEffect, useState } from 'react'
import Arrow from './icons/Arrow'
import { orderBy } from 'lodash'
import { TabsStore } from '@/data'

const SortableTableCol = ({ sortBy, type }) => {
    const tabsContext = useContext(TabsStore)
    const handleSort = () => {
        tabsContext.setSortBy({
            col: sortBy,
            by: tabsContext.sortBy.by === 2 ? 0 : tabsContext.sortBy.by + 1,
        })
    }

    useEffect(() => {
        if (tabsContext.sortBy.col == sortBy) {
            tabsContext.setSortBy({
                ...tabsContext.sortBy,
                by: 1,
            })
        }
    }, [tabsContext.sortBy.col])

    useEffect(() => {
        if (tabsContext.sortBy.col == sortBy) {
            type === 'number'
                ? tabsContext.setItems(
                    _.orderBy(
                        tabsContext.items,
                        [
                            item =>
                                parseInt(
                                    _.get(item, tabsContext.sortBy.col, ''),
                                ),
                        ],
                        [
                            tabsContext.sortBy.by == 1 ||
                                tabsContext.sortBy.by == 0
                                ? 'asc'
                                : 'desc',
                        ],
                    ),
                )
                : tabsContext.setItems(
                    _.orderBy(
                        tabsContext.items,
                        [
                            item =>
                                _.get(item, tabsContext.sortBy.col, '')
                                    .toString()
                                    .toLowerCase(),
                        ],
                        [
                            tabsContext.sortBy.by == 1 ||
                                tabsContext.sortBy.by == 0
                                ? 'asc'
                                : 'desc',
                        ],
                    ),
                )
        }
    }, [tabsContext.sortBy])
    return (
        <div className="sortable-tabel-col cursor-pointer" onClick={handleSort}>
            <Arrow
                className={`rotate-180 mb-1 ${tabsContext.sortBy.by === 1 &&
                    tabsContext.sortBy.col === sortBy
                    ? 'opacity-0'
                    : ''
                    }`}
            />
            <Arrow
                className={`${tabsContext.sortBy.by === 2 &&
                    tabsContext.sortBy.col === sortBy
                    ? 'opacity-0'
                    : ''
                    }`}
            />
        </div>
    )
}

export default SortableTableCol
