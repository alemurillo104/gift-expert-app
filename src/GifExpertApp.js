import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


const GifExpertApp = () => {


    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {

    //     // setCategories([...categories, 'Otro elem']);
    //     setCategories( cats => [ ...cats, 'Omg'] );
    // }


    
    return(
        <>
            <h2> GifExpertAPP </h2>
            <AddCategory />
            <hr />

            {/* <button onClick={ handleAdd } >Agregar</button> */}

            <ol>
                { 
                    categories.map( (category, i) => {
                    return <li key= {i} > {category} </li>;
                    })
                }
            </ol>
        </>
    );


}

export default GifExpertApp;