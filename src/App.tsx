import { NewNote } from "./components/NewNote"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from "./components/HomeView"
import Layout from "./Layout"

export default function App () {


    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/new" element={<NewNote/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}