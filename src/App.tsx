import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./Layout"
import { Home } from "./components/Home"
import { NoteCreate } from "./components/NoteCreate"
import { NoteEdit } from "./components/NoteEdit"

export default function App () {

    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/new" element={<NoteCreate/>}/>
                    <Route path="/edit/:id" element={<NoteEdit/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}