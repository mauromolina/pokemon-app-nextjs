import { useEffect, useState } from "react";
import { FavsList, NoFavs } from "../../components/favs";
import { Layout } from "../../components/layouts";
import { localStorageUtils } from "../../util";

const FavoritesPage = () => {

  const [ favs, setFavs ] = useState<number[]>([]);
  
  useEffect(() => {
    setFavs(localStorageUtils.getFavs());
  }, [])

  return (
    <Layout title="Mis Favoritos - Pokémon App">
      { favs.length === 0 
      ? <NoFavs/>
      : <FavsList favs={favs}/>}
    </Layout>
  );
};

export default FavoritesPage;
