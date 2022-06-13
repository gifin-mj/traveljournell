import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={require(`../Images/${props.image}`)} alt=""/>
            <div className='card-content'>
                <img src={require("../Images/loc.png")} alt=""/>
                <span>{props.country}</span >
                <a href='#ef'>View on Google Maps</a>
                <h1>{props.name}</h1>
                <h5>{props.date}</h5>
                <p>{props.desc}</p>
            </div>
    </div>
  )
}

export default Card;