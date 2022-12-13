import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Details.scoped.scss';

interface Pokemon {
  id: number;
  name: string;
  forms: { name: string; url: string }[];
}

function Details() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  const navigate = useNavigate();

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const load = async () => {
      await wait(1000);

      const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data1 = await res1.json();

      setPokemon(data1);

      const res2 = await fetch(data1.forms[0].url);
      const data2 = await res2.json();

      setImage(data2.sprites.front_default);
    };

    load();
  }, [name]);

  if (!pokemon || !image) return <h2>Loading...</h2>;

  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={image} alt={pokemon.name} />
      <button
        type="button"
        onClick={() => {
          // navigate('/pokemon');
          navigate(-1);
        }}
      >
        Back...
      </button>
    </>
  );
}

export default Details;
