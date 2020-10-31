import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

function List () {
    let [movies, setMovies] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const moviesRaw = await fetch("src/assets/data.json");
        const moviesJSON = await moviesRaw.json();
    
        if (moviesJSON) {
            setMovies(moviesJSON);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='row'>
            {movies.map(movie =>
                <div key={ movie.id } className='col-sm-2'>
                    <Card movie={ movie } />
                </div>    
            )}
        </div>
    );
}

export default List;
