import React, { useState, useEffect } from "react";
import axios from 'axios'

import useQuery from '../Hooks/useQuery'

const List = () => {
  const [ characters, setCharacters ] = useState([])

  const { loading, data } = useQuery("https://rickandmortyapi.com/api/character/");

  if (loading) return 'Loading....'

  return <div>
    {
      data.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <p> {character.name} </p>
          </div>
        );
      })
    }
  </div>
}


export default List




