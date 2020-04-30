import React from 'react';
import './card.styles.scss';
const Card = ({Poster,Title,Year,showMovie,id}) =>{
    return(
        <div className="card" onClick={()=>showMovie(id)}>
            <img src={Poster} alt="Avatar" className='img'/>
            <div className="container">
                <h4><b>{Title}</b></h4>
                <p>{Year}</p>
            </div>
        </div> 
    );
}

export default Card;