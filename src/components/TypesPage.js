import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import {
  wrapper,
  marginTop,
} from '../stylesheets/Common.module.css';
import {
  container,
} from '../stylesheets/HomePage.module.css';

const TypesPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);

    const data = await response.json();

    const { pokemon } = data;

    const result = [];
    let index = 0;

    while (index < pokemon.length) {
      if (index < 20) {
        result.push(pokemon[index]);
      } else {
        break;
      }

      index += 1;
    }

    setPokemons(result.map(obj => obj.pokemon.name));
    setLoading(false);
  }, []);

  return (
    <div
      className={`${wrapper} ${marginTop}`}
    >
      {
        loading ? (
          <Loader />
        ) : (
          <div className={container}>
            {
              pokemons.map(pokemon => (
                <Link
                  key={pokemon}
                  to={`/pokemon/${pokemon}`}
                >
                  {pokemon}
                </Link>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default TypesPage;
