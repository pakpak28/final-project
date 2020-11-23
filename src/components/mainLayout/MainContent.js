import React, { Component } from "react";

import PokemonList from "../pokemonAPI/PokemonList";

export default class MainContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}
