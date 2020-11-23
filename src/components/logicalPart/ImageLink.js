import React from "react";

export default class ImageLink extends React.Component {
  render() {
    return (
      <img
        className="card-img-top rounded"
        src={`/pokemons/${this.props.id}.png`}
        alt={this.props.name}
      />
    );
  }
}
