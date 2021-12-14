import React , {useEffect,useState} from 'react';
import ChartRow from './ChartRow';


function Chart (){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      const url = "http://localhost:3100/api/products";
      fetch( url )
      .then( response => response.json() )
      .then( data => {
        let newProducts = []
        newProducts = data.products
        setProducts(newProducts);
    });
},[]);


    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
            <h2 className="m-0 font-weight-bold text-gray-800">Listado de productos:</h2>
                <br></br>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre del producto</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            products.map( ( item , i) => {
                                return <ChartRow {...item} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;