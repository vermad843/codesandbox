import React from "react";

function Pres(props) {
  return (
    <ul>
      <li>
        <h1>{props.character.name}</h1>
        <h1>{props.character.height}</h1>
        <h1>{props.character.mass}</h1>
        <h1>{props.character.gender}</h1>
      </li>
    </ul>
  );
}

export default Pres;
