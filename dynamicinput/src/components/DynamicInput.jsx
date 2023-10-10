import React, { useState } from 'react'

const DynamicInput = () => {
    const[messsage,setMessage]=useState('');
  return (
    <div>
    
    <label>Enter the value:</label>
    <input type='text'
    value={messsage}
    onChange={(e)=>setMessage(e.target.value)}
    ></input>
    
    <p>{messsage}</p>
    </div>
  )
}

export default DynamicInput