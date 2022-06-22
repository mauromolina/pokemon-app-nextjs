import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "../../components/layouts";
import { PokemonDetail } from "../../components/pokemons";

import { PokemonDetailPageProps } from "../../interfaces";

import { sgUtils, textUtils } from "../../util";

const PokemonDetailPage: NextPage<PokemonDetailPageProps> = ({ pokemon }) => {
  return (
    <Layout title={`${textUtils.capitalizeText(pokemon.name)} - Detalles`}>
      <PokemonDetail pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const firstGenPokemons = sgUtils.generateFirstGenArray();

  return {
    paths: firstGenPokemons.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await sgUtils.getPokemonInfo(id);
  
  if (!pokemon) return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400
  };
};

export default PokemonDetailPage;
