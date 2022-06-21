import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../ui/Navbar';

interface LayoutProps {
    children: React.ReactNode,
    title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({children, title}) => (
    <>
      <Head>
        <title>{ title || 'Pokémon App'}</title>
        <meta name="author" content="Mauro Molina"/>
        <meta name="description" content={`${title}`}/>
        <meta name="keywords" content={`${title}`} />
        <meta property="og:title" content="Información sobre Pokémons!!" />
        <meta property="og:description" content="Esta página da información de todos los pokémons." />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar/>

      <main style={{
        padding: '0px 20px',
      }}>

        { children }

      </main>
    </>
);
