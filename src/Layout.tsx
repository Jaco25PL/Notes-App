import { ReactNode } from "react"
import { useActions } from "./hooks/useActions"

export default function Layout ({ children }:{children: ReactNode} ) {

    const { display } = useActions()

    return (
        <div className={` ${display && 'dark'}  w-full  `}>
            <div className="dark:bg-dark-bg min-h-dvh">
                <div className="mx-auto max-w-[700px] flex flex-col justify-between">
                    { 
                        children
                    }
                </div>
            </div>
        </div>
    )
}