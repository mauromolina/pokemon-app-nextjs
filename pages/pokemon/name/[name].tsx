import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "../../../components/layouts";
import { PokemonDetail } from "../../../components/pokemons";

import {
  PokemonDetailPageProps,
  PokemonListResponse,
} from "../../../interfaces";

import pokeApi from "../../../api/pokeApi";
import { sgUtils } from "../../../util";

const PokemonByNamePage: NextPage<PokemonDetailPageProps> = ({ pokemon }) => (
  <Layout>
    <PokemonDetail pokemon={pokemon} />
  </Layout>
);
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await sgUtils.getPokemonInfo(name)
    },
  };
};

export default PokemonByNamePage;
