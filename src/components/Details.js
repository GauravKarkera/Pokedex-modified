import React, { Component } from 'react'

export default class Details extends Component {

  render() {
      console.log("inside detail page",this.props);
      
      const {height, weight, stats, type , id, backToPrev}=this.props.data
    return (
      <div className="card" style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          id
          }.png`})`,backgroundRepeat:"no-repeat"
      }} >  
      <h1>Height:{height}</h1>&nbsp;<h1>Weight:{weight}</h1>
      <ul>
      {stats.map(ele =>{
          return <li>{ele.stat.name}:{ele.base_stat}</li>

      })}
      </ul>
      <ul>
      {type.map(elem =>{
          return <li>{elem.type.name}</li>

      })}
      </ul>
      <p><button onClick={backToPrev}>Back</button></p>
          
      </div>
    )
  }
}
