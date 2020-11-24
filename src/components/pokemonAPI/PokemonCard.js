import React, { Component } from "react";
import ImageLink from "../logicalPart/ImageLink";
import CatchButton from "../logicalPart/CatchButton";
export default class PokemonCard extends Component {
  state = {
    id: "",
    name: "",
    catched: false,
    date: "",
  };
  componentDidMount() {
    const { name, id, catched, date } = this.props;
    this.setState({
      name,
      id,
      catched,
      date,
    });
  }

  render() {
    return (
      <div>
        <div className="pd-3 mt-3 px-2">
          <div className="card card-block shadow  border-danger mx-auto">
            <div className="card-header ">
              <div>{this.state.id}</div>
              <div>{this.state.name}</div>
              <CatchButton
                id={this.state.id}
                name={this.state.name}
                disabled={this.state.catched}
              />
            </div>

            <ImageLink id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}
