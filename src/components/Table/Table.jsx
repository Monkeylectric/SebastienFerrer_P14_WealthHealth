import './Table.css';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import columns from '../../services/columns';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';
import { getMockedData } from '../../services/utils';
import ShowEntries from '../ShowEntries/ShowEntries';
import { storeSelector } from '../../store/storeSelectors';
import { useSelector } from 'react-redux';

import sortIcon from '../../assets/sort.svg';

/**
 * Component which displays employee table 
 * into employee list page
 * 
 * @returns Table
 */
function Table() {
    const defaultData = getMockedData();
    // const defaultData = useSelector(storeSelector).employees;
    // console.log(defaultData);
    
    const [data, setData] = useState(() => [...defaultData]);
    const [globalFilter, setGlonalFilter] = useState("");
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            pagination,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChanged: setGlonalFilter,
        getPaginationRowModel: getPaginationRowModel(),
        // debugTable: true,
    });

    return (
        <div className="table-container">
            <div className="table-filters">
                <ShowEntries 
                    table={table}
                    pagination={pagination}
                    setPagination={setPagination}
                />
                <Filter 
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlonalFilter}
                    pagination={pagination}
                    setPagination={setPagination}
                />
            </div>
            <table className="table-content">
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        {
                            header.column.getCanSort && <img 
                                    src={sortIcon}
                                    alt="sort"
                                    onClick={header.column.getToggleSortingHandler()}
                                />
                        }
                        {
                            {
                                asc: " 🔼",
                                desc: " 🔽",
                            }[header.column.getIsSorted()]
                        }
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination
                table={table} 
                pagination={pagination}
                setPagination={setPagination}
            />
        </div>
    )
}

export default Table;