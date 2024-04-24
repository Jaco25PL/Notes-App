import { useState } from "react"
import { Link } from "react-router-dom"
import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { newNote } from "../store/notesSlice/slice"
import { useActions } from "../hooks/useActions"

export function NewNote () {

    const { dispatch } = useActions()
    
    const [ noteTitle , setNoteTitle ] = useState<string>('')
    const [ noteMessage , setNoteMessage ] = useState<string>('')

    const handleDone = () => {
        
        const createNote = { noteTitle, noteMessage }
        dispatch(newNote(createNote))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const fields = new FormData(form)
        const noteTitle = fields.get('title') as string
        const noteMessage = fields.get('message') as string

        const createNote = ({ noteTitle, noteMessage })
        dispatch(newNote(createNote))

    }

    return (
        <div>
            <header className="flex justify-between mx-4 mr-6 mt-2">
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

            <main className="ml-7 mr-2 mt-10">
                <form onSubmit={handleSubmit}>
                    <div  className="flex flex-col gap-2">
                        <input 
                        onChange={(e) => setNoteTitle(e.target.value)}
                        type="text"
                        name="title" 
                        placeholder="Title"
                        className="placeholder:font-medium placeholder:text-3xl placeholder:text-input-btn placeholder:opacity-50 text-4xl font-bold dark:text-gray-100 bg-transparent outline-none whitespace-nowrap "
                        />

                        <TextareaAutosize
                        onChange={(e) => setNoteMessage(e.target.value)}
                        name="message"
                        className="w-full box-border resize-none pr-4 min-h-[500px] placeholder:font-medium placeholder:text-lg placeholder:text-input-btn placeholder:opacity-50 text-xl dark:text-gray-100 bg-transparent outline-none"
                        aria-label="extarea"
                        placeholder="Message"
                        />
                    </div>
                </form>
            </main>

        </div>
    )
}