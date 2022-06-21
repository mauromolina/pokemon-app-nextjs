import { FC, useState } from 'react'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { Sprites } from '../../interfaces'
import { localStorageUtils } from '../../util'

interface Props {
    id: number,
    name: string,
    sprites: Sprites
}

export const PokemonDetailInfo: FC<Props> = ({ id, name, sprites }) => {

    const [ isInFavs, setIsInFavs ] = useState<boolean>(localStorageUtils.exists(id));
  
    const onToggleFav = () => {
        localStorageUtils.toggleFavorite(id);
        setIsInFavs(!isInFavs)
    } 
    
  return (
    <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button color="gradient" shadow={isInFavs} onPress={onToggleFav}>
                { isInFavs ? 'En Mis Favoritos' : 'Agregar a favoritos' }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image src={sprites.front_default} 
                alt={name} width={100} height={100}/>
                <Image
                  src={sprites.back_default}
                  alt={name} width={100} height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name} width={100} height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name} width={100} height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
  )
}
