import { Link } from "react-router-dom"
import { useActions } from "../hooks/useActions"
 
export function NotesPreview () {

    const { noteState } = useActions()

    return (
        <div className="px-5 my-3 w-full grid justify-items-center grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 sm:gap-8">

            {
                noteState?.map(note => (
                    <Link
                    to={`/edit/${note.id}`}
                    aria-label="edit note"
                    key={note.id} className="max-w-[100px] sm:max-w-44"
                    >
                        <div className="outline-2 outline-yellow-btn hover:outline dark:bg-input-bg [&_*]:tracking-tighter dark:[&>h2]:text-gray-50 [&>h2]:text-gray-950 overflow-hidden p-1 sm:p-3 dark:[&>p]:text-input-btn  bg-gray-300 h-20 w-[100px] sm:h-36 sm:w-44 rounded-lg">
                            <h2 className="text-[9px]">{note.noteTitle}</h2>
                            <p className="text-[8px]">{note.noteMessage}</p>
                        </div>
                        <div className="leading-3  dark:[&>h2]:text-gray-50 dark:[&>span]:text-input-btn text-gray-950 text-center mt-2">
                            <h2 className="leading-6 text-lg font-semibold break-words">
                                {note.noteTitle && note.noteTitle.length > 15 ? note.noteTitle?.slice(0,15) + '...' : note.noteTitle}
                            </h2>
                            <span className="text-sm font-medium">{note.date?.D+'/'+note.date?.M+'/'+note.date?.Y}</span>
                        </div>
                    </Link>
                ))
            }
           
        </div>
    )
}