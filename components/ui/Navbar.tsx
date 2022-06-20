import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  const id = Math.floor(Math.random() * (152 - 1)) + 1;

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme?.colors.gray50.value,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        padding: "0px 20px",
        width: "100%",
      }}
    >
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="App Icon" width={70} height={70}/>
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okémon</Text>

      
      <Spacer css={{flex: 1}}/>
      <Text color="white" h3>Favoritos</Text>
    </div>
  );
};
