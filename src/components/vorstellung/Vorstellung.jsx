import React from 'react'
import './vorstellung.css'
import jamila from '../../assets/Kandidaturfoto.png'

const Vorstellung = () => {
  return (
    <div className='jg__vorstellung' id='vorstellung'>
      <div className='jg__vorstellung-content'>
        <h1 className='gradient__text'>Wer bin ich</h1>
        <p> Ich bin Jamila Gränzer, Informatikstudentin des FB5 der Hochschule Anhalt.
            Die Hochschule und vor allem der Fachbereich 5 liegen mir sehr am Herzen und ich sehe viel Potential, das noch nicht genutzt wird.
            </p>
        <p>Derzeit gibt es Prozesse in der Hochschule, die für Studierende nicht transparent sind, obwohl diese die Existenz von Studiengängen und Fachbereichen betreffen. Das finde ich inakzeptable.</p>
      </div>
      <div className='jg__vorstellung-image'>
        <img src={jamila} alt="Jamila" />
      </div>
    </div>
  )
}

export default Vorstellung