

const toggleFavorite = (id: number) => {

    let favs: number[] = JSON.parse(localStorage.getItem('favs') || '[]');

    if ( favs.includes(id) ) {
        favs = favs.filter(pokeId => pokeId !== id);
    } else {
        favs.push(id);
    }

    localStorage.setItem('favs', JSON.stringify(favs));

}

const exists = (id: number): boolean => {

    if (typeof window === 'undefined') return false;
    
    const favs: number[] = JSON.parse(localStorage.getItem('favs') || '[]');

    return favs.includes(id);

}

const getFavs = (): number[] => {
    return JSON.parse(localStorage.getItem('favs') || '[]');
}

const exportedFunctions = {
    toggleFavorite,
    exists,
    getFavs
}

export default exportedFunctions