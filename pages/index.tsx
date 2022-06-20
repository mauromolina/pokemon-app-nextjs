import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Pokémon App - HomePage'>
      <h1>PokeApp con Next</h1>
      <Button>Hola!</Button>
  
    </Layout>
  )
}

export default HomePage
