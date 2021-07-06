import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import KrishiBazar from "./views/KrishiBazar";
import SearchBar from "./Components/SearchBar/SearchBar";
import CardList from "./Components/Card/CardList";
import Moviesource from "./Api/SearchBar/Moviesource";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await Moviesource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/krishiBazar" component={KrishiBazar} />
      </Router>
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">React Searchbar</h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
