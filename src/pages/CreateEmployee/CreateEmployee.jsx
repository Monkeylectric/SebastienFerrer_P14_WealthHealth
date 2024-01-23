import React, { useState } from 'react';
import './CreateEmployee.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../layouts/Main/Main';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

/**
 * Create employee page
 * 
 * @returns create employee page
 */
function CreateEmployee() {
    return (
        <React.Fragment>
            <Navbar />
            <Main 
                customStyle={{
                    display:"flex", 
                    flexDirection: "column",
                }}
            >
                <Title text="Create Employee" />
                <Form />
            </Main>
        </React.Fragment>
    );
}

export default CreateEmployee;