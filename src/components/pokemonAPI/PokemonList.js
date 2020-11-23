import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "http://localhost:5000/pokemons?_limit=",
    pokemon: null,
  };
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    // console.log(res);

    this.setState({ pokemon: res.data });
  }

  render() {
    return this.state.pokemon ? (
      <div className="row">
        {this.state.pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} id={pokemon.id} />
        ))}
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}
