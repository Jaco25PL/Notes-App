import { TextareaAutosize } from '@mui/base/TextareaAutosize'

interface NoteCreateProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    setNoteTitle: (noteTitle: string) => void 
    setNoteMessage: (noteMessage: string) => void
}

export function NoteCreate ({handleSubmit, setNoteTitle, setNoteMessage }: NoteCreateProps) {

    return (
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
    )
}