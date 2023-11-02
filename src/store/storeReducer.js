import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: [],
}

export const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push({
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            });
        },
    },
})

export const { addEmployee } = storeSlice.actions;

export default storeSlice.reducer;