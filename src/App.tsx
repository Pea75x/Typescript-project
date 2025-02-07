import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote.tsx'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="my-4">
      <Routes>
        <Route path='/' element={<h1>home</h1>}/>
        <Route path='/new' element={<NewNote/>} />
        <Route path="/:id">
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  )
}

export default App
