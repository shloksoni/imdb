import React from 'react';

import './movie-display.styles.scss';

const MovieDisplay = ({movie}) =>{
    console.log(movie);
    return(
        <div className='movie-display'>
           <img src={movie.Poster} className='img' alt={movie.Title} />
           <div className='movie-content'>
               <h1>{movie.Title}</h1>
           </div>
        </div>
    )
}
export default MovieDisplay;