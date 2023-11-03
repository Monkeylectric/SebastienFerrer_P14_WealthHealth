import { createAction } from "@reduxjs/toolkit";

export const addEmployee = createAction("store/addEmployee", ({firstname, lastname, birthdate, startdate, street, city, state, zipcode, department}) => {
    return {
        payload: {
            firstname,
            lastname,
            birthdate,
            startdate,
            street,
            city,
            state,
            zipcode,
            department
        }
    }
});
