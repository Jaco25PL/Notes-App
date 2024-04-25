import { NoteEditor } from "./components/NoteEditor"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home"
import Layout from "./Layout"
import { NoteEdit } from "./components/NoteEdit"

export default function App () {


    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/new" element={<NoteEditor/>}/>
                    <Route path="/edit/:id" element={<NoteEdit/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}