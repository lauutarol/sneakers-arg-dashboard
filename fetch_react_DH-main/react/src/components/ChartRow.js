
import React, { useEffect, useState } from 'react';


function ChartRow({...props}){

let imagen = props.image
console.log(imagen)
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.category}</td>
                </tr>
            )
    }
    
        

export default ChartRow;