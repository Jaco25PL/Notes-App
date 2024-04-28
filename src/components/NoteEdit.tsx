import { useParams } from "react-router-dom"
import { useActions } from "../hooks/useActions"
import { TextareaAutosize } from "@mui/base"
import { useState } from "react"
import { editNote, deleteNote } from "../store/notesSlice/slice"
import { useNavigate } from "react-router-dom"
import type { Id } from "../types"
import { useUpdateDate } from "../hooks/useUpdateDate"

export function NoteEdit () {

    const navigate = useNavigate()

    const { id } = useParams<Id>()
    const { dispatch , noteState } = useActions()

    const  date  = useUpdateDate()
    
    const matchedNote = noteState.filter(note => note.id === id) // note to edit
    const { noteTitle , noteMessage } = matchedNote[0]

    const [ editTitle, setEditTitle ] = useState(noteTitle)
    const [ editMessage, setEditMessage ] = useState(noteMessage)

    const handleDone = () => {

        id && dispatch(editNote({
            id: id,
            noteTitle: editTitle,
            noteMessage: editMessage,
            date: date
        }))
        navigate('/')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        id && dispatch(editNote({
            id: id,
            noteTitle: editTitle,
            noteMessage: editMessage,
            date: date
        }))
        navigate('/')
    }

    const handleDelete = () => {
        const { id } = matchedNote[0]
        dispatch(deleteNote(id))
        navigate('/')
    }

    return (
        <div className="dark:bg-dark-bg bg-gray-50 min-h-dvh ">
            <header className="sticky top-0 flex justify-between px-4 pr-6 py-2 dark:bg-dark-bg dark:bg-opacity-70 dark:backdrop-blur-lg bg-gray-50 bg-opacity-50 backdrop-blur-md ">
                <button
                className="flex items-center gap-1"
                type="submit"
                onClick={handleDone}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="dark:text-yellow-btn w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="dark:text-yellow-btn font-semibold text-xl">Notes</div>
                </button>

                <div className="flex items-center gap-3">
                    <button
                    aria-label="trash button"
                    type="button"
                    onClick={handleDelete}
                    className="hover:text-red-400 transition-none text-red-600 font-semibold text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                    
                </div>
            </header>

            <main className="ml-7 mr-2 mt-10 [&_*]:text-gray-800">
                <form onSubmit={handleSubmit}>
                    <div  className="flex flex-col gap-2">
                        <input 
                        onChange={(e) => setEditTitle(e.target.value)}
                        type="text"
                        name="title"
                        value={editTitle}
                        placeholder="Title"
                        className="placeholder:font-medium placeholder:text-3xl placeholder:text-input-btn placeholder:opacity-50 text-3xl font-bold dark:text-gray-100 bg-transparent outline-none whitespace-nowrap "
                        />

                        <TextareaAutosize
                        onChange={(e) => setEditMessage(e.target.value)}
                        value={editMessage}
                        name="message"
                        className="w-full box-border resize-none pr-4 min-h-[500px] placeholder:font-medium placeholder:text-lg placeholder:text-input-btn placeholder:opacity-50 text-lg dark:text-gray-100 bg-transparent outline-none"
                        aria-label="extarea"
                        placeholder="Message"
                        />
                    </div>
                </form>
            </main>

        </div>
    )
}