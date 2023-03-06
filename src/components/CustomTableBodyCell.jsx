import { TabsData } from '@/context/tabs'
import { MyContextData } from '@/context/state'
import { useContext, useEffect, useState } from 'react'
import { get } from 'lodash'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Rating } from '@mui/material'

const CustomTableBodyCell = ({ col, _item }) => {
    return (
        <td className="w-auto whitespace-normal overflow-hidden truncate">
            {col.render.type == 'link' ? (
                <Link
                    href={`${col.render.href}${_.get(
                        _item,
                        col.render.hrefParam,
                        '',
                    )}`}>
                    {_.get(_item, col.render.label, '')}
                </Link>
            ) : col.render.type == 'linkStatic' ? (
                <Link
                    href={`${col.render.href}${_.get(
                        _item,
                        col.render.hrefParam,
                        '',
                    )}`}>
                    {col.render.label}
                </Link>
            ) : col.render.type == 'rate' ? (
                <Rating readOnly value={_.get(_item, col.render.label, '')} />
            ) : col.render.type == 'multi' &&
              _.get(_item, col.render.items, '').length > 0 ? (
                <div className="flex flex-wrap">
                    {_.get(_item, col.render.items, '').map((item, index) =>
                        col.render.color ? (
                            <span
                                key={`${item.id}-${index}`}
                                className="bg-darkblue text-gray-800 mr-2 mb-2 px-2.5 py-0.5 rounded">
                                {_.get(item, col.render.label, '')}
                            </span>
                        ) : (
                            <div key={`${item.id}-${index}`}>
                                {_.get(item, col.render.label, '')}
                            </div>
                        ),
                    )}{' '}
                </div>
            ) : col.render.type == 'multiDouble' &&
              _.get(_item, col.render.items, '').length > 0 ? (
                <div className="flex flex-wrap">
                    {_.get(_item, col.render.items, '').map((item, index) =>
                        col.render.color
                            ? _.get(item, col.render.subitems, '').map(
                                  (item2, index) => (
                                      <span
                                          key={`${item2.id}-${index}`}
                                          className="bg-darkblue text-gray-800 mr-2 mb-2 px-2.5 py-0.5 rounded">
                                          {_.get(item2, col.render.label, '')}
                                      </span>
                                  ),
                              )
                            : _.get(
                                  item,
                                  col.render.subitems,
                                  '',
                              ).map((item2, index) => (
                                  <div key={`${item2.id}-${index}`}>
                                      {_.get(item2, col.render.label, '')}
                                  </div>
                              )),
                    )}{' '}
                </div>
            ) : col.render.type == 'date' ? (
                _.get(_item, col.render.label, '') ? (
                    dayjs(_.get(_item, col.render.label, '')).format(
                        'DD/MM/YYYY',
                    )
                ) : (
                    ''
                )
            ) : col.render.type == 'dateTime' ? (
                _.get(_item, col.render.label, '') ? (
                    dayjs(_.get(_item, col.render.label, '')).format(
                        'DD/MM/YYYY HH:mm:ss',
                    )
                ) : (
                    ''
                )
            ) : col.render.type == 'label' ? (
                _.get(_item, col.render.label, '')
            ) : (
                <></>
            )}
        </td>
    )
}

export default CustomTableBodyCell
