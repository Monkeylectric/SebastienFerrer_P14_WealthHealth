import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: [],
}

export const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
    },
})

export const { addEmployee } = storeSlice.actions;

export default storeSlice.reducer;