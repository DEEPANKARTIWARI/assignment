import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
        let cendol=2

  return (
    <div>
        <h2>Question-2</h2>
        <ComponentB cendol={cendol}/>
    </div>
  )
}

export default ComponentA

