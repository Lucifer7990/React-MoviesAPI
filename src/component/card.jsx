import React from 'react';

const Card = ({ movie })=>{
    return(
        <div className="card">
            <img className='poster' src={movie.Poster=='N/A'? 'https://dummyimage.com/400x600/000/fff':movie.Poster} alt={movie.Title} />
            <div className='info'>
                <p className='type'>{movie.Type}</p>
                <h3 className='mtitle'>{movie.Title}</h3>
            </div>
            <p className='year'>{movie.Year}</p>
        </div>
    )
}

export default Card;