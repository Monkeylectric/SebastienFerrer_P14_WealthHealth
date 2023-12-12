import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("firstname", {
        id: "firstname",
        cell: info => info.getValue(),
        header: () => <span>First Name</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("firstname", {
        id: "lastname",
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("startdate", {
        id: "startdate",
        cell: info => info.getValue(),
        header: () => <span>Start Date</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("department", {
        id: "department",
        header: () => <span>Department</span>,
        cell: info => info.getValue(),
        enableColumnFilter: true,
    }),
    columnHelper.accessor("birthdate", {
        id: "birthdate",
        header: () => <span>Date Of Birth</span>,
        cell: info => info.getValue(),
        enableColumnFilter: true,
    }),
    columnHelper.accessor("street", {
        id: "Street",
        header: () => <span>Street</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("city", {
        id: "city",
        cell: info => info.getValue(),
        header: () => <span>City</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("state", {
        id: "state",
        cell: info => info.getValue(),
        header: () => <span>State</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("zipcode", {
        id: "zipcode",
        cell: info => info.getValue(),
        header: () => <span>Zip Code</span>,
        enableColumnFilter: true,
    })
];

export default columns;