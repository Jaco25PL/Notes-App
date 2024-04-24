import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Note {
    noteTitle?: string
    noteMessage?: string
}

const initialState: Note[] = (() => {
    const persistedState = localStorage.getItem('redux-state')
    return persistedState ? JSON.parse( persistedState ).users : []
})() // FUNCTION THAT CALLS ITSELF

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        newNote: (state, action: PayloadAction<Note>) => {
            
            const createNote = action.payload
            state.push(createNote)            
        }
    }
})


export default notesSlice.reducer

export const { newNote } = notesSlice.actions 
