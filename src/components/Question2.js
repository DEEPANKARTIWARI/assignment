import React, { useState } from 'react'

function Question2() {
    const [value ,setValue]=useState(false)
  return (
    <>
   
    <div style={{marginTop:"5em"}}>
        <h2>Question-3</h2>
        <button style={{backgroundColor: value?"red":"blue",color:"#fff", padding:"10px",borderRadius:"10px"}} onClick={()=>setValue(!value)} >Button </button>
    </div>
    </>
  )
}

export default Question2
