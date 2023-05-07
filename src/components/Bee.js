import React from "react";


function Bee({ bee }) {
  return (
    <div className="card">
      <img src={bee.image} alt={bee.name} />
      <h4>{bee.name}</h4>
      <p>Average size: {bee.size}</p>
      <p>Preferred Climate: {bee.climate}</p>
      <p>Features:</p>
      <ul>
        {bee.features.map((feature) => <li key={bee.id + feature}>{feature}</li>)}
      </ul>
    </div>
  )
}

export default Bee
