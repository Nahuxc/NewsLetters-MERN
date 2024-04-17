import React, { useRef, useState } from 'react'
import "./LoaderInit.css"


/* loader de inicio */
const LoaderInit = () => {

    const [loading, setLoading] = useState(true)

    const box1 = useRef()
    const box2 = useRef()

    if(loading === true){
        setTimeout(() => { /* tiempo de espera a que desaparezca el loader */
            box1.current.classList.add("disapiarbox1")
            box2.current.classList.add("disapiarbox2")
            setLoading(false)
        }, 800);

    }

  return (
    <div>
        <div ref={box1} className='box1'>
            <h2>Bienvenido a </h2>
        </div>
        <div ref={box2} className='box2'>
            <h2>Newsletters Generator</h2>
        </div>
    </div>
  )
}

export default LoaderInit