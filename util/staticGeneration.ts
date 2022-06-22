import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon, Pokemon } from "../interfaces/pokemon.interfaces";

const generateStaticProps = (data: PokemonListResponse): SmallPokemon[] => {
  return data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
};

const generateFirstGenArray = (): string[] =>
  [...Array(151)].map((value, i) => `${i + 1}`);

const getPokemonInfo = async (nameOrId: string) => {
  
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    const { id, name, sprites } = data;
    return {
      id,
      name,
      sprites,
    };
  } catch (error) {
    return null;
    
  }
};

const exportedFunctions = {
  generateStaticProps,
  generateFirstGenArray,
  getPokemonInfo
};

export default exportedFunctions;
