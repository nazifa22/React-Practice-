import React from 'react';

const ListRendering = () => {
    const names = ['Jhon', 'Sara', 'Mak', 'Danial']
    const nameList = names.map(name => <td>{name}</td>)
    
    return (
        // <div>
        //     <p style = {{fontStyle: 'italic'}}>
        //         {
        //             names.map(name => <p>{name}</p>)
        //         }
        //     </p>
        // </div>
        
        <tr style = {{fontStyle: 'italic'}}>
            {
                nameList
            }
        </tr>
    )
}

export default ListRendering;