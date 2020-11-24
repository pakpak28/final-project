import React from "react";
import { Link } from "react-router-dom";

export default class ImageLink extends React.Component {
  render() {
    return (
      <Link to={`/pokemon_id/${this.props.id}`}>
        <img
          className="card-img-top rounded"
          src={`/pokemons/${this.props.id}.png`}
          alt={this.props.name}
        />
      </Link>
    );
  }
}
