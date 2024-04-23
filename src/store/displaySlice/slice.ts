import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export const displaySlice = createSlice({
    name: 'display',
    initialState: true,
    reducers: {
        displayMode: (state, action: PayloadAction< boolean >) => {
            const value = action.payload
            return state = value
        },
    }
})

export default displaySlice.reducer

export const { displayMode } = displaySlice.actions