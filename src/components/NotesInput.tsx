import { TextareaAutosize } from "@mui/base"

interface Props {
    editTitle: string | undefined
    editMessage: string | undefined
    setEditTitle: (value: string) => void 
    setEditMessage: (value: string) => void
}

export function NotesInput ({setEditTitle, editTitle, setEditMessage, editMessage}: Props) {

    return (
        <main className="ml-7 mr-2 mt-10 [&_*]:text-gray-800">
            <form onSubmit={e => e.preventDefault()}>
                <div  className="flex flex-col gap-2">
                    <input 
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle}
                    type="text"
                    name="title"
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

    )
}