import React from 'react'
import './problem.css'
import Feature from '../feature/Feature'

const Problem = () => {
  return (
    <div className='jg__problem section__padding' id='problem'>
      <div className='jg__problem-feature'>
        <Feature />
      </div>
      <div className='jg__problem-heading'>
        <h1 className='gradient__text'>Ich setze mich für Transparenz, Information und Mitspracherecht für Studierende der HSA ein.</h1>
      </div>
      <div className='jg__problem-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default Problem