
import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // useEffect(() => {
        
    //     getGifs( category ).then( setImages);
    //     // return async () => {
    //     //     const resp = await getGifs( category );
    //     //     setImages( resp ); 
    //     // }
    // }, [ category ])


    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>

            { loading && <p>Loading...</p>}

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            // img={ img }
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
