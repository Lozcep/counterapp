import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value)

    const handleClick = (e)=>{
        
        setCounter(counter +1 )
    }

    const handleReset = (e)=>{
        
        setCounter(value )
    }

    const handleSustract = (e)=>{
        
        setCounter(counter - 1 )
    }
    return(
        <>
         <h1>CounterApp</h1>
         <h2> {counter} </h2>
         <button
         onClick={ handleClick } >+1</button>
         <button
         onClick={ handleReset } >RESET</button>
         <button
         onClick={ handleSustract } >-1</button>
        </>
    )

}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp