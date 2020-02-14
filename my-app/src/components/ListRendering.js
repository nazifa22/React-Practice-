import React from 'react';

const ListRendering = () => {
    const names = ['Jhon', 'Sara', 'Jennifer', 'Richel']
    const nameLists  = names.map(name => <p>{name}</p>)
    
    return (
        // <div>
        //     <p style = {{fontStyle: 'italic'}}>
        //         {
        //             names.map(name => <p>{name}</p>)
        //         }
        //     </p>
        // </div>
        
        <div style = {{fontStyle: 'italic'}}>
            {
                nameLists
            }
        </div>
    )
}

export default ListRendering;