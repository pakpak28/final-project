import React, { Component } from "react";
import axios from "axios";

export default class CatchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
    axios.post(
      "http://localhost:5000/catched/",
      {
        id: this.props.id,
        name: this.props.name,
        catched: true,
        date: new Date().toLocaleDateString(),
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="catch-btn btn btn-warning text-white"
          onClick={this.handleClick}
          id={this.props.id}
          name={this.props.name}
          disabled={this.state.active ? true : false}
        >
          {this.state.active ? "Catched!" : "Catch"}
        </button>
      </div>
    );
  }
}
