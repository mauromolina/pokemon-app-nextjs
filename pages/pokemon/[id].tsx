import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetailPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  return (
    <Layout title="Mi Pokémon">
      <h1>
         { pokemon.name } 
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const firstGenPokemons = [...Array(151)].map((value, i) => `${i+1}`);
  
  return {
    paths: firstGenPokemons.map(id => ({
      params: {id}
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as {id: string};
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  console.log(data)
  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonDetailPage;
