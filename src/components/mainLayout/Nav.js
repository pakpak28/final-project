import React, { Component } from "react";
import { BrowserRouter, NavLink, Link, Route } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light sticky-top shadow-sm">
          <Link to="/" className="navbar-brand font-weight-bold text-danger">
            <img
              className="nav-logo"
              alt="pokedex logo"
              src={
                "https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"
              }
            />
          </Link>
          <div className="d-flex flex-row">
            <div className="nav nav-tabs">
              <NavLink
                exact
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
              >
                All Pokemons
              </NavLink>
              <NavLink
                to="/pokemons_catched"
                className="nav-item nav-link"
                activeClassName="active"
              >
                I've catched this!
              </NavLink>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Nav;
