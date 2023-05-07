import React, { useEffect, useState } from "react";
import Flower from "./Flower";
import { v4 as uuid } from 'uuid';



function Flowers() {
  const [flowers, getFlowers] = useState(null)
  const [newFlower, setFlower] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newSeason, setSeason] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/flowers')
      .then(res => res.json())
      .then(data => getFlowers(data))
  }, [])

  const flowerObj = {
    'name': newFlower,
    'image': newImage,
    'season': newSeason

  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/flowers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(flowerObj)
    })
      .then(res => res.json())
      .then(() => getFlowers([...flowers, flowerObj]))
  }


  const renderFlowers = flowers ? flowers.map(flower => <Flower key={uuid()} flower={flower} />) : <div className="loading"><img src='https://cdn.dribbble.com/users/2049961/screenshots/5390540/bee_animation_dribble.gif' alt='loading' /> </div>

  return (
    <div>
      <div className="new-flower">
        <h2>Add a New Bee-loving Flower!</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" name="name" placeholder="Flower name" onChange={e => setFlower(e.target.value)} />
          <input type="text" name="image" placeholder="Image URL" onChange={e => setNewImage(e.target.value)} />
          <input type="text" name="season" placeholder="Season to plant" onChange={e => setSeason(e.target.value)} />
          <button type="submit">Add Plant</button>
        </form>
      </div>
      <div className="list">
        {renderFlowers}
      </div>
    </div>
  )
}

export default Flowers