import { useState } from "react"
import { Link } from "react-router-dom"
import { newNote } from "../store/notesSlice/slice"
import { useActions } from "../hooks/useActions"
import { useNavigate } from "react-router-dom"
import { useUpdateDate } from "../hooks/useUpdateDate"
import { NotesInput } from "./NotesInput"

export function NoteCreate () {

    const navigate = useNavigate()

    const { dispatch } = useActions()

    const [ noteTitle , setNoteTitle ] = useState<string>('')
    const [ noteMessage , setNoteMessage ] = useState<string>('')

    const date = useUpdateDate()

    const handleDone = () => {
        const createNote = { noteTitle, noteMessage, date }
        if(noteTitle.length === 0 && noteMessage.length === 0){
            navigate('/')
            return
        }
        dispatch(newNote(createNote))
        navigate('/')
    }

    return (
        <div className="dark:bg-dark-bg bg-gray-50 min-h-dvh">
            <header className="flex justify-between sticky  top-0 px-4 py-2 pr-6 dark:bg-dark-bg dark:bg-opacity-70 dark:backdrop-blur-lg bg-gray-50 bg-opacity-50 backdrop-blur-md   ">
                <Link to={'/'} className="flex items-center gap-1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="dark:text-yellow-btn w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="dark:text-yellow-btn font-semibold text-xl">Notes</div>
                </Link>

                <div>
                    <button
                    type="submit"
                    className="dark:text-yellow-btn font-semibold text-xl"
                     onClick={handleDone}
                    >
                        Done
                    </button>
                </div>
            </header>

            <NotesInput setEditTitle={setNoteTitle} editTitle={noteTitle} setEditMessage={setNoteMessage} editMessage={noteMessage}  />
        </div>
    )
}