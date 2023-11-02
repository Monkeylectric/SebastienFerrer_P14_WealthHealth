import { createAction } from "@reduxjs/toolkit";

export const addEmployee = createAction("store/addEmployee", (firstName, lastName) => {
    return {
        payload: { firstName, lastName }
    }
});
