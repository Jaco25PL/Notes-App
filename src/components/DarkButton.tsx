// import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { displayMode } from "../store/displaySlice/slice"
import { useActions } from "../hooks/useActions"

export function DarkButton () {

    const { display , dispatch} = useActions()

    const handleDisplay = () => {
        dispatch(displayMode(!display))
    }
    
    return (
        <div className=" flex justify-end pt-3 pr-3">
            <button onClick={handleDisplay} type="button" className="">
                <div className={`${!display ? 'block' : 'hidden'}`}
                aria-label="moon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </div>
                <div className={`${display ? 'block' : 'hidden'}`}
                aria-label="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="dark:text-yellow-btn w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </div>
            </button>
        </div>
    )
}