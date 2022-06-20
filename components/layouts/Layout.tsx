import Head from "next/head";
import { FC } from "react";

interface LayoutProps {
    children: React.ReactNode,
    title?: string,
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokémon App'}</title>
        <meta name="author" content="Mauro Molina"/>
        <meta name="description" content={`${title}`}/>
        <meta name="keywords" content={`${title}`} />
      </Head>
      {/* Navbar */}

      <main>

        { children }

      </main>
    </>
  );
};
