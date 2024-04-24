import { useActions } from "../hooks/useActions"
 
export function HomeNotes () {

    const { noteState } = useActions()


    return (
        <div className="px-5 mt-9 w-full flex flex-wrap gap-4 sm:gap-8">

            {
                noteState?.map(note => (
                    <div key={note.id} className="max-w-24 sm:max-w-44">
                        <div className="dark:bg-input-bg [&_*]:tracking-tighter dark:[&>h2]:text-gray-50 [&>h2]:text-gray-950 overflow-hidden p-1 sm:p-3 dark:[&>p]:text-input-btn  bg-gray-300 h-20 w-24 sm:h-36 sm:w-44 rounded-lg">
                            <h2 className="text-[9px]">{note.noteTitle}</h2>
                            <p className="text-[8px]">{note.noteMessage}</p>
                        </div>
                        <div className="leading-3 dark:[&>h2]:text-gray-50 dark:[&>span]:text-input-btn text-gray-950 text-center mt-2">
                            <h2 className="leading-6 text-lg font-semibold">{note.noteTitle}</h2>
                            <span className="text-sm font-medium">20/3/24</span>
                        </div>
                    </div>
                ))
            } 
           
        </div>
    )
}