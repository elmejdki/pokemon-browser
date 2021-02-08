import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import {
  container,
  menus,
  menu,
} from '../stylesheets/PokemonPage.module.css';
import {
  wrapper,
  marginTop,
} from '../stylesheets/Common.module.css';

const PokemonPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );

    const data = await response.json();

    const {
      sprites: { other: { dream_world: { front_default: pokemonImage } } },
      abilities: newAbilities,
      stats: newStats,
      types: newTypes,
    } = data;

    setImage(pokemonImage);
    setAbilities(newAbilities.map(object => object.ability.name));
    setStats(newStats.map(obj => ({
      stat: obj.base_stat,
      name: obj.stat.name,
    })));
    setTypes(newTypes.map(obj => obj.type.name));

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
          <div
            className={container}
          >
            <img
              src={image}
              alt="Pokemon"
            />
            <div>
              <h1>{name}</h1>
              <div
                className={menus}
              >
                <div
                  className={menu}
                >
                  <h3>Types</h3>
                  <div>
                    {
                      types.map(type => (
                        <Link
                          key={type}
                          to={`/type/${type}`}
                        >
                          {type}
                        </Link>
                      ))
                    }
                  </div>
                </div>
                <div
                  className={menu}
                >
                  <h3>Abilities</h3>
                  <div>
                    {
                      abilities.map(ab => (
                        <div
                          key={ab}
                        >
                          {ab}
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div
                  className={menu}
                >
                  <h3>Stats</h3>
                  <div>
                    {
                      stats.map(({ name, stat }) => (
                        <div
                          key={name}
                        >
                          {name}
                          :&nbsp;
                          {stat}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default PokemonPage;
