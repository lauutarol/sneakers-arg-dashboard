import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper(){
    
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
       const url = "http://localhost:3100/api/products";
       fetch( url )
       .then( response => response.json() )
       .then( data => {
        console.log(CharacterData)
        setProducts(data);
    });
   },[]);

   useEffect(()=>{
    const url = "http://localhost:3100/api/users";
    fetch( url )
    .then( response => response.json() )
    .then( data => {
     console.log(CharacterData)
     setUsers(data);
 });
},[]);


    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop products={products} users= {users}/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;