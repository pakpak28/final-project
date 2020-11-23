import React, { Component } from "react";
import ImageLink from "../logicalPart/ImageLink";

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
        <div className="pd-5">
          <div className="card card-block shadow  border-danger mx-auto">
            <div className="card-header ">
              <div>{this.state.id}</div>
              <div>{this.state.name}</div>
              <div>{this.state.catched}</div>
              <div>{this.state.date}</div>
            </div>

            <ImageLink id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}
