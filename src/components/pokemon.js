import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {

  details = (id) => {
    console.log(id);
    console.log(this.props);
    this.props.details.getdetails(id)
  }

  render() {
    const { pokemon } = this.props
    const id = pokemon.id

    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          onClick={()=>this.details(id)}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
              }.png`})`
          }}
        />
        
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

export default Pokemon
