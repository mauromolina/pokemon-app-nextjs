import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { PokemonCard } from "./";
import { PokemonGridProps } from "../../interfaces";

export const PokemonGrid: FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
