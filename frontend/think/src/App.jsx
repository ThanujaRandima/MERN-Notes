import React from "react"
import {Routes, Route} from "react-router"
import Homepage from "./pages/Homepage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NoteDetailPage from "./pages/NoteDetailPage.jsx"
import toast from "react-hot-toast"


const App = () => {
  return (
    <div className="relative w-full h-full" >
      <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path = "/" element={<Homepage />} />
        <Route path = "/create" element={<CreatePage />} />
        <Route path = "/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App