import React ,{useState} from 'react'

function ComponentB({cendol}) {
const [value,setValue]=useState(cendol)
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+10)}>Increase</button>
    </div>
  )
}

export default ComponentB
