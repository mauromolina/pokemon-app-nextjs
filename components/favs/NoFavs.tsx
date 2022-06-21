import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavs = () => {
  const id = Math.floor(Math.random() * (152 - 1)) + 1;

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>Aún no tenés favoritos...</Text>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="No Pokémon"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};
