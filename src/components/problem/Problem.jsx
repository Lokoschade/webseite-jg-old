import React from 'react'
import './problem.css'

const Problem = () => {
  return (
    <div className='jg__problem section__margin' id='problem'>
      <div className='jg__problem-intro'>
        <p>Wir, als Studierende, haben ein Recht auf Mitsprache, Information und Transparenz. Wir gestalten die Hochschule mit und lassen nicht zu, dass stillschweigend irreversible Veränderungen, die uns akut betreffen, ohne unser Einverständnis umgesetzt werden.</p>      </div>
      <div className='jg__problem-heading'>
        <h1 className='gradient__text'>Es ist nicht in Ordnung, dass</h1>
      </div>
      <div className='jg__problem-container'>
        <div className='jg__problem-container__item'>
          <div/>
          <p>aufgrund von Verschwiegenheitspflicht, mangelndem Interesse, mangelnder Information oder Fahrlässigkeit, die Studierendenschaft nicht über Prozesse, die ihren Fachbereich akut betreffen, informiert werden.</p>
        </div>
        <div className='jg__problem-container__item'>
          <div/>
          <p>hinter geschlossenen Türen über Entscheidungen diskutiert wird, die uns, Studierende, etwas angehen.</p>
        </div>
        <div className='jg__problem-container__item'>
          <div/>
          <p>es keine allgemeine Einsicht für Studierende in die Prozesse des StuRa und Senates gibt.</p>
        </div>
      </div>
    </div>
  )
}

export default Problem