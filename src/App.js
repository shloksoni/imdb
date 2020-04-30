import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import MovieDisplay from './components/movie-display/movie-display.component';

import ViewCards from './components/view-cards/view-cards.component';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: [],
      
      currentMovie :{}
      
    }
  }

  fireQuery = (event) =>{
    
    if(event.which === 13  ){
      
      
       // fetch(`http://localhost:3000/search/${this.state.input}`)
      fetch(`http://localhost:3000/search?search=${event.target.value}`)
     
      .then(res => res.json())
      .then(data => {
        
        this.setState({result : data, currentMovie : {}})
      
      })
      
    }
  }
  showMovie=(id)=>{
     fetch(`http://localhost:3000/search/${id}`)
     .then(res => res.json())
     .then(data => this.setState({currentMovie : data}))
  }
  render(){
    return (
      <div className="App">
            <Header handleChange ={this.handleChange} fireQuery = {this.fireQuery} input={this.state.input}/>
            {
              Object.keys(this.state.currentMovie).length === 0
              ? <ViewCards data = {this.state.result} showMovie = {this.showMovie}/>
              : <MovieDisplay movie = {this.state.currentMovie}/>

            }
            
          
      </div>
    );
  }

}

export default App;
