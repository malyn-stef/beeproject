import React, { useEffect, useState } from "react";
import Bee from './Bee'


function BeeList() {
  const [beeList, setBees] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/bees')
      .then(res => res.json())
      .then(data => setBees(data))
  }, [])

  const renderBees = beeList ? beeList.map((bee) => <Bee key={bee.id} bee={bee} />) : <div className="loading"><img src='https://cdn.dribbble.com/users/2049961/screenshots/5390540/bee_animation_dribble.gif' alt='loading' /> </div>
  return (
    <div className="list">
      {renderBees}
    </div>


  )
}

export default BeeList