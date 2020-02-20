import React from 'react';

const List = ({person}) => {
    return (
        <div>
            <p className = "greenYellow">
                Hi! I am {person.name}. I am {person.age} years old and I am skilled at {person.skill}.
            </p>  
        </div>
    )
}

export default List;