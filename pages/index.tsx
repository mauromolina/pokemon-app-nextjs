import { NextPage, GetStaticProps } from "next";

import { Layout } from "../components/layouts";
import { PokemonGrid } from "../components/pokemons";

import {
  HomePageProps,
  PokemonListResponse,
  SmallPokemon,
} from "../interfaces";

import { pokeApi } from "../api";

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title="Pokémon App - HomePage">
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
