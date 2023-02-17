import React, { useState, useCallback } from 'react'
import Count from './Count';
import Button from './Button'
import Title from './Title';

const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrememtAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) ;

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]) 
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick ={incrememtAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
