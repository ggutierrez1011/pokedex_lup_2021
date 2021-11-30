import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokedex from "../components/Pokedex";

export default function App() {
  return (
    <div>
      <Navbar />

      <div className="App">
        <Searchbar />
        <Pokedex />
      </div>
    </div>
  );
}
