import { Pokemon, SmallPokemon } from "./pokemon.interfaces";

export interface HomePageProps {
    pokemons: SmallPokemon[];
  }

export interface PokemonDetailPageProps {
    pokemon: Pokemon;
  }