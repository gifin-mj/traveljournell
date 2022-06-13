import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={require(`../Images/${props.image}`)} alt=""/>
        <img src={require("../Images/loc.png")} alt=""/>
        <p>{props.country}</p>
        <a href='#ef'>View on Google Maps</a>
        <h1>{props.name}</h1>
        <h5>{props.date}</h5>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card;