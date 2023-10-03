import React from 'react';
import './CreateEmployee.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../layouts/Main/Main';
import Form from '../../components/Form/Form';

// import { useLoaderData } from "react-router-dom";

function CreateEmployee() {
    return (
        <React.Fragment>
            <Navbar />
            <Main>
                <Form />
            </Main>
        </React.Fragment>
    );
}

export default CreateEmployee;