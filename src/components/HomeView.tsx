import { useState, useRef } from "react"
import { DarkButton } from "./DarkButton"

export function HomeView () {


    const [ isSearch , setIsSearch ] = useState(false)
    const clearForm:React.MutableRefObject< HTMLFormElement | null> = useRef(null)
 
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value ? setIsSearch(true) : setIsSearch(false)
    }
    const handleClearSearch = () => {
        const form = clearForm.current
        if(form) {
            form.reset()
            setIsSearch(false)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // const field = new FormData(e.target)
        
    }
 
    return (
        <div className={`w-full h-full `}>
            <DarkButton />
    {/* HEADER */}
            <header className="mt-3 mx-5">
                <h1 className="text-5xl font-bold dark:text-gray-50">Notes</h1>
            </header>

    {/* SEARCH INPUT */}
            <div>
                <form 
                onSubmit={handleSubmit}
                ref={clearForm}
                >
                    <div className="mx-5 my-3 rounded-lg px-2 py-1 text-gray-300 flex justify-between items-center bg-gray-300 dark:bg-gray-50 dark:bg-opacity-10">
                        <div className="mr-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>

                    <input 
                    onChange={handleSearch}
                    type="text" 
                    placeholder="Search" 
                    name="search"
                    autoComplete="off"
                    className="w-full text-gray-500 dark:text-gray-400 bg-transparent placeholder:text-lg focus:outline-none"/>

                    <button 
                    type="button"
                    onClick={handleClearSearch}
                    className={`${isSearch ? 'block' : 'hidden'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500 dark:text-gray-400">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                
                </form>
            </div>
        </div>
    )
}