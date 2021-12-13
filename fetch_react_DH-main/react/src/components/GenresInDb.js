
import React, { useEffect, useState } from 'react';

function GenresInDb() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const url = "http://localhost:3100/api/products";
    fetch( url )
    .then( response => response.json() )
    .then( data => {
     setProducts(data);
 });
},[]);

let categorias = products.countByCategory
console.log(categorias)

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Total de productos por categorías:
            </h5>
            <div className="card-body">
              </div>
            <div>En la categoría "Urban" hay: {categorias?.[0].Urban || "Cargando..."} productos. </div>
            <div>En la categoría "Retro" hay: {categorias?.[1].Retro || "Cargando..."} productos. </div>
            <div>En la categoría "Sport" hay: {categorias?.[2].Sport || "Cargando..."} productos. </div>
        </div>
        </div>
    </div>
  );
}

export default GenresInDb;
