import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/Movielist/MovieList.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App