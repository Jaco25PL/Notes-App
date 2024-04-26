import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export const footerViewportSlice = createSlice({
    name: 'footerViewport',
    initialState: true,
    reducers: {
        footerViewport: ( _, action: PayloadAction<boolean>) => {
            return action.payload
        }
    }
})

export default footerViewportSlice.reducer

export const { footerViewport } = footerViewportSlice.actions