import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
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
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="App Icon"
        width={70}
        height={70}
      />
      <Link href="/">
        <Text color="white" h2>
          P
        </Text>
      </Link>
      <Link href="/">
        <Text color="white" h3>
          okémon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" css={{ marginRight: "10px" }}>
        <Text color="white" h3>
          Favoritos
        </Text>
      </Link>
    </div>
  );
};
