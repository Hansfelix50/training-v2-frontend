import React, { useState, useEffect } from 'react';
import { Router } from "@reach/router"

import Layout from './Layouts'

import Home from './Views/Home'
import Settings from "./Views/Settings"
import List from './Views/List'


function App() {
  const [ name, setName ] = useState('Luis')

  useEffect(() => {
    console.log('Hola')
  }, [])

  useEffect(() => {
    console.log('El nombre cambio')
  }, [ name ])

  return (
    <Layout>
      <Router>
        <Home path="/"   />
        <Settings path="settings" />
        <List path='list'/>
      </Router>
    </Layout>
  );
}

export default App;
