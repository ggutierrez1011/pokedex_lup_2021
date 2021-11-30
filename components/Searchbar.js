import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const onChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChange} />
      </div>

      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar </button>
      </div>
    </div>
  );
};

export default Searchbar;
