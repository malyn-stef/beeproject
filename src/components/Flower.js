import React from "react";

function Flower({ flower }) {

  return (
    <div className="card">
      <img src={flower.image} alt={flower.name} />
      <h4>{flower.name}</h4>
      <p>Season: {flower.season}</p>
    </div>
  )
}

export default Flower