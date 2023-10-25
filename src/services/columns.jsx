import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("firstName", {
        id: "firstName",
        cell: info => info.getValue(),
        header: () => <span>First Name</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("lastName", {
        id: "lastName",
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        enableColumnFilter: true,
    }),
    columnHelper.accessor("startDate", {
        id: "startDate",
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
    columnHelper.accessor("dateOfBirth", {
        id: "dateOfBirth",
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
    columnHelper.accessor("zipCode", {
        id: "zipCode",
        cell: info => info.getValue(),
        header: () => <span>Zip Code</span>,
        enableColumnFilter: true,
    })
];

export default columns;