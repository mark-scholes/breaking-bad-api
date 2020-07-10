import React from "react";
import img from "../../img/spinner.gif";
import CharacterItem from "./characterItem";

const characterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <img src={img} alt="loading" />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default characterGrid;
