import React from 'react'
import { Navbar, Vorstellung, Problem, Ziele, Stimmen, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Vorstellung />
      </div>
      <Problem />
      <Ziele />
      <Stimmen />
      <Footer />
    </div>
  )
}

export default App