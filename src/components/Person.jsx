import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <h2>  
      {person.name}, I am {person.age} years old, I know {person.skill}
    </h2>
    </div>
  )
}

export default Person
