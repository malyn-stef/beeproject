import React from "react";
import NavBar from "./NavBar";


function Header() {
  return (
    <header>

      <h1>
        <img className="bee" src='https://em-content.zobj.net/thumbs/160/docomo/205/honeybee_1f41d.png' alt='honeybee' />
        BusyBee
      </h1>
      <NavBar />
    </header>
  )
}

export default Header