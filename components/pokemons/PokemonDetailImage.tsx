import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";

import { PokemonDetailImageProps } from "../../interfaces";

export const PokemonDetailImage: FC<PokemonDetailImageProps> = ({ name, src }) => {
  return (
    <Grid xs={12} sm={4}>
      <Card isHoverable css={{ padding: "30px" }}>
        <Card.Body>
          <Card.Image src={src} alt={name} width="100%" height={200} />
        </Card.Body>
      </Card>
    </Grid>
  );
};
