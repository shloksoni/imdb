import React from 'react';
import './header.styles.scss';
const Header = ({handleChange,fireQuery,input}) =>{
    return(
        <div className='header'>
            <input className ='search-input' type='text' 
                 onKeyPress={fireQuery} 
                placeholder='Search and press ENTER'
               
            />
        </div>
    );
}

export default Header;
