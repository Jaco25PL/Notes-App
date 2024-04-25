import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export const displaySlice = createSlice({
    name: 'display',
    initialState: true,
    reducers: {
        displayMode: ( _, action: PayloadAction< boolean >) => {
            return action.payload
        },
    }
})

export default displaySlice.reducer

export const { displayMode } = displaySlice.actions