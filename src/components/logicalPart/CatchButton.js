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
    // axios.get(`http://localhost:5000/catched/${this.state.id}`).then((res) => {
    //   console.log(res.data);
    // });
    axios
      .post(
        "http://localhost:5000/catched/",
        {
          id: this.props.id,
          name: this.props.name,
          catched: true,
          date: new Date().toLocaleDateString(),
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        // if (res.data.catched) {
        //   this.setState({
        //     active: !this.state.active,
        //   });
      });
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
          Catch!
        </button>
      </div>
    );
  }
}
