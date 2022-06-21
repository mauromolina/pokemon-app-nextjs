import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";
import { FavPokemonCardProps } from "../../interfaces";

export const FavPokemonCard: FC<FavPokemonCardProps> = ({ id }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onPokemonClick}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
