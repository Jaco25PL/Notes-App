import { configureStore } from "@reduxjs/toolkit"
import notesReducer from './notesSlice/slice'
import displayReducer from './displaySlice/slice'

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        display: displayReducer
    }
}) 


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch