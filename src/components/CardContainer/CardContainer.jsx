import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ pokemonData }) => {
  return (
    <div className="pokemonCardContainer">
      {pokemonData.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default CardContainer;
