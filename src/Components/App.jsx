import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CommentsForm from './CommentsForm'
import VolunteerForm from './VolunteerForm'
// import './App.css'

function App() {
  
  // All routes placed here.

  return (
    <>
   <h1>Noble_Reach</h1>
   <CommentsForm></CommentsForm>
   <VolunteerForm></VolunteerForm>
    </>
  )
}

export default App
