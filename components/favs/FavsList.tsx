import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavPokemonCard } from "./";
import { FavsListProps } from "../../interfaces";

export const FavsList: FC<FavsListProps> = ({favs}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favs.map((id) => <FavPokemonCard key={id} id={id}/>)}
    </Grid.Container>
  );
};
