import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { PokemonCardProps } from "../../interfaces";

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  return (
    <Grid xs={4} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>#{id}</Text>
            <Text transform="capitalize">{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
