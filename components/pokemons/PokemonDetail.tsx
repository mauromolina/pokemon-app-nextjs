import { FC } from 'react'
import { Grid } from '@nextui-org/react'

import { PokemonDetailImage, PokemonDetailInfo } from './'

import { PokemonDetailProps } from '../../interfaces'

export const PokemonDetail: FC<PokemonDetailProps> = ({pokemon: { id, name, sprites }}) => {
  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <PokemonDetailImage
          src={
            sprites.other?.dream_world.front_default || sprites.other?.home.front_default || ''
          }
          name={name}
        />
        <PokemonDetailInfo
          id={id}
          name={name}
          sprites={sprites}
        />
      </Grid.Container>
  )
}
