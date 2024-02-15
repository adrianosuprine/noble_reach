import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CommentForm from './CommentForm'
import VolunteerForm from './VolunteerForm'
// import './App.css'

function App() {
  
  // All routes placed here.

  return (
    <>
   <h1>Hello Team B.</h1>
   <CommentForm></CommentForm>
   <VolunteerForm></VolunteerForm>
    </>
  )
}

export default App
