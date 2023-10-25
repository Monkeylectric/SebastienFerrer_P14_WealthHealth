import './Table.css';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import columns from '../../services/columns';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';
import { getMockedData } from '../../services/utils';
import ShowEntries from '../ShowEntries/ShowEntries';

function Table() {
    const defaultData = getMockedData();
    
    const [data, setData] = useState(() => [...defaultData]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
            pagination,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });

    return (
        <div className="table-container">
            <div className="table-filters">
                <ShowEntries 
                    pagination={pagination}
                    setPagination={setPagination}
                />
                <Filter 
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
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
                            header.column.getCanSort && <i 
                                    onClick={header.column.getToggleSortingHandler()}
                                >%</i>
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