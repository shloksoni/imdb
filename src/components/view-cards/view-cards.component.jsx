import React from 'react';
import './view-cards.styles.scss';
import Card from '../card/card.component'


const ViewCards = ({data, showMovie}) =>{
    console.log(data.Response); 
    return(
        <div className='view-cards'>
            {
                Object.keys(data).length !== 0
                ?data.Search
                    ?data.Search.map(({imdbID, ...otherProps})=> {
                        
                        return (<Card key ={imdbID}  id={imdbID} {...otherProps} showMovie ={showMovie}/>);
                    }
                    )
                    : <h1>{data.Error}</h1>
                    
                :
                   null 
                    
                
            }
        </div>
    )
}

export default ViewCards;