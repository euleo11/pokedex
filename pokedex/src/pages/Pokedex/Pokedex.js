import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'

const Pokedex = () => {
   
  const navigate = useNavigate()

  return (
    <>
    <button onClick={() => goToHomePage(navigate)}>Todos Pokémons</button>
    <h1>Meus Pokémons</h1>
    </>
  )
}

export default Pokedex