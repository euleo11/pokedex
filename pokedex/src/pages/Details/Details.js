import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'

const Details = ({ name, image, id, type }) => {

  const navigate= useNavigate()

  return (
    <>
      <button onClick={() => goToHomePage(navigate)}>Todos Pokémons</button>
      <h1>Detalhes</h1>
    </>
  )
}

export default Details