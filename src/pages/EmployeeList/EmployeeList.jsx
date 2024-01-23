import React from 'react';
import './EmployeeList.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../layouts/Main/Main';
import Title from '../../components/Title/Title';
import Table from '../../components/Table/Table';

/**
 * Employee list page
 * 
 * @returns employee list page
 */
function EmployeeList() {
    return (
        <React.Fragment>
            <Navbar />
            <Main 
                customStyle={{
                    display:"flex", 
                    flexDirection: "column",
                }}
            >
                <Title text="Current Employees" />
                <Table />
            </Main>
        </React.Fragment>
    );
}

export default EmployeeList;