import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon, PokemonDetailPageProps } from "../../interfaces";
import { PokemonDetailImage, PokemonDetailInfo } from "../../components/pokemons";
import { textUtils } from "../../util";

const PokemonDetailPage: NextPage<PokemonDetailPageProps> = ({ pokemon }) => {

  return (
    <Layout title={`${textUtils.capitalizeText(pokemon.name)} - Detalles`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <PokemonDetailImage
          src={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
          name={pokemon.name}
        />
        <PokemonDetailInfo id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites}/>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const firstGenPokemons = [...Array(151)].map((value, i) => `${i + 1}`);

  return {
    paths: firstGenPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetailPage;
