import { Link } from "react-router-dom"
import { useEffect, useState, useMemo } from "react"
import type { FullNote } from "../types"
import { useActions } from "../hooks/useActions"
import { useDebounce } from "../hooks/useDebounce"

type Props = {
    isNote: string
}



export function NotesPreview ({ isNote }: Props ) {

    const { noteState } = useActions()
    const [ show , setShow ] = useState<FullNote[]>(noteState)

    const memoNote = useMemo(() => {
        return isNote.length > 0 ? noteState.filter(note => note.noteTitle?.toLocaleLowerCase()?.includes(isNote.toLocaleLowerCase())) : noteState
    }, [isNote, noteState])
    
    const  debounceValue = useDebounce(memoNote, 300)

    useEffect(() => {
        if(memoNote && debounceValue) {
            setShow(debounceValue)
        }else{
            setShow(noteState)
        }
    }, [memoNote, noteState, debounceValue])

    return (
        <div className=" px-5 mb-3 pt-5 w-full grid justify-items-center grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 sm:gap-8">

            {
                show?.map(note => (

                    <Link
                    to={`/edit/${note.id}`}
                    aria-label="edit note"
                    key={note.id} className="max-w-[100px] sm:max-w-44 [&_*]:text-gray-800"
                    >
                        <div className="outline-2 outline-yellow-btn hover:outline dark:bg-input-bg [&_*]:tracking-tight dark:[&>h2]:text-gray-50 [&>h2]:text-gray-950 overflow-hidden p-1.5 m:p-3 dark:[&>p]:text-input-btn  bg-gray-300 h-20 w-[100px] sm:h-36 sm:w-44 rounded-lg">
                            <h2 className="text-[9px]">{note.noteTitle}</h2>
                            <p className="text-[7px] leading-[8px]">{note.noteMessage}</p>
                        </div>
                        <div className="leading-3   dark:[&>h2]:text-gray-50 dark:[&>span]:text-input-btn text-gray-950 text-center mt-2">
                            <h2 className=" leading-6 text-lg font-semibold break-words">
                                {note.noteTitle && note.noteTitle.length > 16 ? note.noteTitle?.slice(0,13) + '...' : note.noteTitle}
                            </h2>
                            <span className="text-sm font-medium">{note.date?.D+'/'+note.date?.M+'/'+note.date?.Y}</span>
                        </div>
                    </Link>
                ))
            }
           
        </div>
    )
}