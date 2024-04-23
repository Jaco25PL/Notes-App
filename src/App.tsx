import { NewNote } from "./components/NewNote"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from "./components/HomeView"
// import { Footer } from "./components/Footer"
import { useActions } from "./hooks/useActions"

export default function App () {

    const { display } = useActions()

    return(
        <BrowserRouter>
            <div className={`${display && 'dark'}`}>
                <div className="dark:bg-dark-bg min-h-dvh flex flex-col justify-between">
                    <Routes>
                        <Route path="/" element={<HomeView/>} />
                        <Route path="/new" element={<NewNote/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}