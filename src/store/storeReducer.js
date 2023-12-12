import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
}

export const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);

            localStorage.setItem("employees", JSON.stringify(state.employees));
        },
    },
})

export const { addEmployee } = storeSlice.actions;

export default storeSlice.reducer;