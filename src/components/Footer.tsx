import { useActions } from '../hooks/useActions'
import { Link } from 'react-router-dom'

export function Footer () {

    const { noteState , footerViewport } = useActions()
    const totalNotes = noteState.length

    return (
        <div >
            <div  className={`${footerViewport ? 'dark:bg-dark-bg bg-gray-50' : 'dark:bg-dark-contrast dark:bg-opacity-50 bg-gray-300 bg-opacity-20'} flex justify-center items-center relative px-5 h-14   dark:backdrop-blur-lg  backdrop-blur-md`} >
                <span className="text-sm font-semibold dark:text-gray-50 ">{totalNotes} Notes</span>
                <Link 
                to={"/new"}
                className="absolute right-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="transition-none dark:text-yellow-btn text-gray-950  w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}