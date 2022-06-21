import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

import { PokemonCardProps } from "../../interfaces";

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  const router = useRouter();
  
  const onPokemonClick = () => {
    router.push(`/pokemon/name/${name}`)
  }

  return (
    <Grid xs={4} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onPokemonClick} variant="bordered">
        <Card.Body css={{ py: "$10" }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Divider/>
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
