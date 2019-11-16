import React, { useState, useEffect } from "react"

import { Link } from "@reach/router"
import { navigate } from "@reach/router";

// TODO: Investigar como llamar navigate desde las props.

const Home = () => {

  setTimeout(() => {
    navigate('settings')
  }, 5000);

  return (
    <div>
      Home
      <nav>
        <Link to="/">Home</Link> | <Link to="settings">Settings</Link>
      </nav>
    </div>)
}

export default Home
