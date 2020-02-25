import React from 'react';

const List = ({value}) => {
    return (
        <div>
            <p className = "greenYellow">
                Hi! I am {value.name}. I am {value.age} years old and I am skilled at {value.skill}.
            </p>  
        </div>
    )
}

export default List;