import React from 'react'
import { Break, Footer, Header } from './containers';
import { Navbar, Themen, Vorstellung } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Break />
      <Vorstellung />
      <Themen />
      <Footer />
    </div>
  )
}

export default App