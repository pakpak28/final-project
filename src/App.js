import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonCatchedList from "./components/pokemonAPI/PokemonCatchedList";
import PokemonID from "./components/pokemonAPI/PokemonID";

import MainContent from "./components/mainLayout/MainContent";
import Nav from "./components/mainLayout/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={MainContent} />
          <Route path={"/pokemon_id"} component={PokemonID} />
          <Route path={"/pokemons_catched"} component={PokemonCatchedList} />
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
