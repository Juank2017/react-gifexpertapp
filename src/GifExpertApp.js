import React, { useState } from 'react';
import { AddCategpry } from './components/AddCategpry';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState( ['']);




    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

          <AddCategpry setCategories = {setCategories}>

          </AddCategpry>

            
                {
                    categories.map( category =>
                        <GifGrid 
                            key = { category}
                            category = { category}
                        />
                    )
                }
            
        </>
    );
}

export default GifExpertApp;