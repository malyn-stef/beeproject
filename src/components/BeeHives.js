import React, { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';



function BeeHives() {
  const [hives, getHives] = useState(null)


  useEffect(() => {
    fetch('http://localhost:6001/hives')
      .then(res => res.json())
      .then(data => getHives(data))
  }, [])




  const renderHives = hives ? hives.map(hive => <div key={uuid()} className="card">
    <img src={hive.image} alt={hive.name} />
    <h4>{hive.name}</h4>
    <h3>Pros:</h3>
    <ul>
      {hive.pros.map((h) => <li key={uuid()}>{h}</li>)}
    </ul>
    <h3>Cons:</h3>
    <ul>
      {hive.cons.map((h) => <li key={uuid()}>{h}</li>)}
    </ul>
  </div>) : <div className="loading"><img src='https://cdn.dribbble.com/users/2049961/screenshots/5390540/bee_animation_dribble.gif' alt='loading' /> </div>

  return (
    <div className="list">
      {renderHives}
    </div>
  )
}



export default BeeHives