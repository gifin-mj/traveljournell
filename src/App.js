import React from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import places from './places';

function App() {

  const cards=places.map(place=>{
      return(
        <Card 
        key={place.id}
        {...place}
        />
      )
  })


  return (
    <div className="App">
        <Header/>
        
        {cards}
        
    </div>
  );
}

export default App;
