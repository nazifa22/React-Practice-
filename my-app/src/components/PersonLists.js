import React from 'react';
import List from './List';

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
    
    const personLists = persons.map(person => (
        <List key = {person.id} value = {person} />
    ))
    
    return (
        <div>
            {personLists}
        </div>
    )
}

export default PersonLists; 