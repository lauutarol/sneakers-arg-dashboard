import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

function LastMovieInDb( ){

    const [products, setProducts] = useState ([])

    useEffect(()=>{
        const url = "http://localhost:3100/api/products";
        fetch( url )
        .then( response => response.json() )
        .then( data => {
         setProducts(data.products);
     });
    },[]);

    let ultimoProducto = products[products.length -1] || "Cargando"
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado:</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {ultimoProducto?.name || "Cargando..."}
                    </div>
                    <div><img src={ultimoProducto?.image}  style={{width:"200px"}} alt={ultimoProducto?.name}/></div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
