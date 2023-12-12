import React, { useEffect, useState } from 'react';
import './CreateEmployee.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../layouts/Main/Main';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';
import Modal from '@monkeylectric/modal-wealth-health';

// import { useLoaderData } from "react-router-dom";

function CreateEmployee() {
    const [displayModal, setDisplayModal] = useState(false);

    // useEffect(() => {
        const handleDisplayedModal = () => {
            setDisplayModal(true);
        }

        const handleCloseModal = () => {
            setDisplayModal(false);
        }
    // }, [])
    

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
                <button onClick={() => handleDisplayedModal()}>Open Modal</button>
                {displayModal && <Modal 
                    handleCloseModal={handleCloseModal}
                    message="Test message beaucoup trop long pour entrer dans la modal" 
                    overlayOpacity={.8} 
                    modalBackground="#E2FA48" 
                    modalColor="#32a852" 
                />}
            </Main>
        </React.Fragment>
    );
}

export default CreateEmployee;