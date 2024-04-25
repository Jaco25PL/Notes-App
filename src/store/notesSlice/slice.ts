import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Note, FullNote } from "../../types"

const initialState: FullNote[] = (() => {
    const persistedState = localStorage.getItem('redux-state-notes')
    return persistedState ? JSON.parse( persistedState ) : []
})() // FUNCTION THAT CALLS ITSELF

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        newNote: (state, action: PayloadAction<Note>) => {
            const id = crypto.randomUUID()
            // const newDate = new Date()
            //     const Y = parseInt(String(newDate.getFullYear()).slice(-2))
            //     const D = newDate.getDate()
            //     const M = newDate.getMonth() + 1
            // const date: Date = {M, D, Y}

            const createNote:FullNote = { ...action.payload, id}
            state.push(createNote)
        },
        editNote: (state, action: PayloadAction<FullNote>) => {
            const { id, date, noteTitle , noteMessage } = action.payload
            const findNote = state.find(note => note.id === id)

            if(findNote){
                findNote.noteTitle = noteTitle,
                findNote.noteMessage = noteMessage,
                findNote.date = date
            }            
        },
        deleteNote: (state, action: PayloadAction<FullNote>) => {

            const id = action.payload
            return state.filter(note => note.id !== id)
        }
    }
})


export default notesSlice.reducer

export const { newNote, editNote, deleteNote } = notesSlice.actions 
