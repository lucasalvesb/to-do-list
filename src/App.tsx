import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'



const tasks = [
  {
    id: 1,
    content: [
    {type: 'paragraph', content: 'Hello, guys!' }, 
    {type: 'link', content: 'https://github.com/lucasalvesb' }
    ]
  },]



function App() {


  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  )
}

export default App
