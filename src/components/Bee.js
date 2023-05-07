import React from "react";


function Bee({ bee }) {
  return (
    <div className="card">
      <img src={bee.image} alt={bee.name} />
      <h4>{bee.name}</h4>
      <h3>Average size: {bee.size}</h3>
      <h3>Preferred Climate: {bee.climate}</h3>
      <h3>Features:</h3>
      <ul>
        {bee.features.map((feature) => <li key={bee.id + feature}>{feature}</li>)}
      </ul>
    </div>
  )
}

export default Bee
