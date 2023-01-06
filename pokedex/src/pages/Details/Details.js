import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'
import { DetailsContainer } from './Details.styled'

const Details = ({ name, image, id, type }) => {

  const navigate = useNavigate()

  return (
    <>
    
      <button onClick={() => goToHomePage(navigate)}>Todos Pokémons</button>

      <Header />

<DetailsContainer>
      <div className='cinza'>

        <div>
          <h1>Detalhes</h1>
        </div>

        <div className='verde'>
          <div className='imgFrontBack'>
            imagem1

            imagem2
          </div>

          <div className='stats'>STATS

            <div>Requisição Stats</div>

          </div>

          <div className=''>
            <div>
            <p>#0{id}</p>
          <p>{name}</p>
            </div>
            <div> TYPE1 TYPE2</div>

            <div>MOVES

            </div>

            <img alt='POKEMON'/>
          </div>

        </div>
      </div>
      </DetailsContainer>
    </>
  )
}

export default Details