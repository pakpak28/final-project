import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/catched?_page=1&_limit=20").then((res) => {
      this.setState({ pokemon: res.data, counter: 2 });
    });
  }
  handleClick() {
    axios
      .get(
        `http://localhost:5000/catched?_page=${this.state.counter}&_limit=20`
      )
      .then((res) => {
        this.setState({ pokemon: res.data, counter: this.state.counter + 1 });
      });
  }

  render() {
    let pokemons = this.state.pokemon;
    let ifDisabled;
    if (pokemons.length < 20) {
      ifDisabled = true;
    } else {
      ifDisabled = false;
    }
    return this.state.pokemon ? (
      <div className="container mt-3">
        <div className="row">
          {this.state.pokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              id={pokemon.id}
              catched={pokemon.catched}
            />
          ))}
          <div className="load-more ">
            <button
              className="load-more__btn btn btn-danger"
              type="button"
              onClick={this.handleClick}
              disabled={ifDisabled}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}
