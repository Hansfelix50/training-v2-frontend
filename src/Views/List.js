import React, { useState, useEffect } from "react";
import axios from 'axios'


const List = () => {
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(({ data: { results } }) => {
        setCharacters(results)
      })
      .catch(error => {
        console.log("Ocurrio algun error en el API", error)
      })
  }, []);

  return <div>
    {
      characters.map((character) => {
        return (<div>
          <img src={character.image}/>
          <p> {character.name} </p>
        </div>)
      })
    }
  </div>
}


export default List




