import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Note {
    noteTitle?: string
    noteMessage?: string
}

interface NonteWithId extends Note { 
    id: `${string}-${string}-${string}-${string}-${string}`
}

const initialState: Note[] = (() => {
    const persistedState = localStorage.getItem('redux-state-notes')
    return persistedState ? JSON.parse( persistedState ) : []
})() // FUNCTION THAT CALLS ITSELF

// const initialState: Note[] = []

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        newNote: (state, action: PayloadAction<Note>) => {
            const id = crypto.randomUUID()
            const createNote:NonteWithId = { ...action.payload, id}
            state.push(createNote)            
        },
        // deleteNote: (state, action: PayloadAction<NonteWithId>) => {
        //     const badNote = action.payload
        //     return state.filter(note => note.id !== badNote.id)
        // }
    }
})


export default notesSlice.reducer

export const { newNote } = notesSlice.actions 
