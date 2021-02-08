import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import {
  wrapper,
  marginTop,
} from '../stylesheets/Common.module.css';
import {
  container,
  button,
} from '../stylesheets/HomePage.module.css';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    );
    const data = await response.json();

    const newPokemons = data.results;

    setNext(data.next);
    setPokemons(newPokemons);
    setLoading(false);
  }, []);

  const handleClick = async () => {
    setLoading(true);

    const response = await fetch(next);
    const data = await response.json();

    setNext(data.next);
    setPokemons(prevPokemons => [...prevPokemons, ...data.results]);
    setLoading(false);
  };

  return (
    <div
      className={`${wrapper} ${marginTop}`}
    >
      <div
        className={container}
      >
        {
          pokemons.map(poke => (
            <Link
              key={poke.name}
              to={`/pokemon/${poke.name}`}
            >
              {poke.name}
            </Link>
          ))
        }
      </div>
      {
        loading && (
          <Loader />
        )
      }
      {
        next && (
          <button
            className={button}
            type="button"
            onClick={handleClick}
          >
            Load More
          </button>
        )
      }
    </div>
  );
};

export default HomePage;
