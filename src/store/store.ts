import { configureStore, type Middleware } from "@reduxjs/toolkit"
import notesReducer from './notesSlice/slice'
import displayReducer from './displaySlice/slice'
import footerViewportReducer from './footerViewportSlice/slice'


const persistenceLSMiddleware: Middleware = store => next => action => {
    
    next(action)
    localStorage.setItem('redux-state-notes', JSON.stringify(store.getState().notes))
    // localStorage.clear()
} 


export const store = configureStore({
    reducer: {
        notes: notesReducer,
        display: displayReducer,
        footerViewport: footerViewportReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceLSMiddleware)
}) 


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch