import * as React from 'react';
import { PokemonCardContainer } from './PokemonCard.styled';
import axios from 'axios';
import '../../style.css';

export default function PokemonCard({ name, image, id, type }) {
  const [data, setData] = React.useState({});
  const [types, setTypes] = React.useState('');

  const getPokemonType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    data.types && data.types.map((type) => {
      setTypes(type.type.name);
    })
  }
  React.useEffect(() => {
    getPokemonType();
    console.log('types', types)

  }, []);



  return (
    <PokemonCardContainer className={types}>

      <div className='first'>
        <div className='second'>
          <p>#0{id}</p>
          <p>{name}</p>

          <div className='third'>

            {data.types && data.types.map((type) => {
              return <p className="type">{type.type.name}</p>;

            })}
          </div>

        </div>
          <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
        </div>

      <div className='fourth'>
        <a className='details'>DETALHES</a>
        <button className='capturar'>Capturar</button>
      </div>

    </PokemonCardContainer>
  );
}