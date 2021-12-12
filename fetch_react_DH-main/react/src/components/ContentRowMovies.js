import React from 'react';
import SmallCard from './SmallCard';



function ContentRowMovies(props){

    let productCount = {
        title: 'Total de productos',
        color: 'primary',
        cuantity: props.products.count || "Cargando...",
        icon: 'fas fa-gift',
      }
  
      /* <!-- Total awards --> */
  
      let userCount = {
        title: 'Total de usuarios',
        color: 'success',
        cuantity: props.users.count || "Cargando...",
        icon: 'fas fa-user',
      }
      /* <!-- Actors quantity --> */
  
      let CategoryCount = {
        title: 'Total de categorias',
        color: 'warning',
        cuantity: props.products.countByCategory?.length || "Cargando...",
        icon: 'fas fa-restroom',
      }
  
    let cartProps = [productCount, userCount, CategoryCount]
  

    return (
        <div className="row">
          {cartProps.map((carts, i) => {
            return <SmallCard {...carts} key={i} />
          })}
        </div>
      )
    }
    
    export default ContentRowMovies
    