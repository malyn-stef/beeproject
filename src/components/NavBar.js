import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="navbar">
      <NavLink className='navlink' to='/'>Home</NavLink>
      <NavLink className='navlink' to='/beelist'>Kinds of Bees</NavLink>
      <NavLink className='navlink' to='/beehives'>Types of Hives</NavLink>
      <NavLink className='navlink' to='/flowers'>Bee-loving Flowers</NavLink>
    </div>
  )
}
export default NavBar