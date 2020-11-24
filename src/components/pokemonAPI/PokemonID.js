import React, { Component } from "react";
import axios from "axios";
import ImageLink from "../logicalPart/ImageLink";

class PokemonID extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      id: 0,
      status: 0,
    };
  }
  componentDidMount() {
    const id = this.props.location.pathname.replace(/\D/g, "");
    axios.get(`http://localhost:5000/pokemons/${id}`).then((res) => {
      this.setState({ pokemon: res.data, id: id });
    });
    axios.get(`http://localhost:5000/catched/${id}`).then((res) => {
      this.setState({ status: res.data.catched, date: res.data.date });
    });
  }
  render() {
    return (
      <div className="pokemon-page d-flex align-items-center justify-content-center">
        <div className="pokemon-card row align-items-center">
          <div className="pokemon-card__container_img col-6">
            <ImageLink id={this.state.pokemon.id} />
          </div>

          <div className="pokemon-card__container_text col-6">
            <h2 className="pokemon-card__name">{this.state.pokemon.name}</h2>
            <p className="pokemon-card__id">
              <br />
              <strong>ID :&emsp;</strong>
              {this.state.pokemon.id}
            </p>
            <p>
              <strong>
                Status-catched :&emsp;{this.state.status ? "true" : "false"}
              </strong>
            </p>
            <p>
              <strong>Date :&emsp;{this.state.date}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonID;
