import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'
import { Route } from "react-router"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Details from "./Details";
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

class Page extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log("qqqqqqqqqqqqqqqqqqq", this.props);

    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  pokemonList() {

    this.props.backToPrev()
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props


    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} details={this.props} />
        </li>
      )
    })

    return (
      <div className="page">



        {error && <div className="page__error">{error}</div>}

        {this.props.isFetched_details ? (
          <Details data={this.props} />
        ) : (
          (isFetched ? (
        <p>Loading...</p>

        ) : (
            <React.Fragment>
              <div className="page__search">
                <Search onChange={this.handleSearch.bind(this)} />
              </div>
              <ul className="pokemons">{pokemons}</ul>
            </React.Fragment>
          )))}
      </div>
    )
  }
}

export default Page
