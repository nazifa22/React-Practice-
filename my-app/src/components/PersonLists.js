import React from 'react';

const PersonLists = () => {
    const persons = [
        {
            id: 1,
            name: 'Jhon',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sara',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Simon',
            age: 33,
            skill: 'Vue'
        }
    ]
    
    const personLists = persons.map(persons => (
        <p>
            Hi! I am {persons.name}. I am {persons.age} years old and I am skilled at {persons.skill}
        </p>  
    ))
    
    return (
        <div>
            {personLists}
        </div>
    )
}

export default PersonLists;