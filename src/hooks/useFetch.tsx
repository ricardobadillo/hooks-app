import { useEffect, useState } from 'react';
import { Pokemon } from '../models/pokemon';

const localCache: { [key: string]: Pokemon } = {
    'https://pokeapi.co/api/v2/pokemon/1': {
        id: 1,
        name: 'bulbasaur',
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png'
        }
    }
};

export const useFetch = (url: string) => {

    const [ state, setState ] = useState<
    { data: Pokemon | null, isLoading: boolean, hasError: boolean, error: unknown }
    >({ data: null, isLoading: true, hasError: false, error: null });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({ data: null, isLoading: true, hasError: false, error: null });
    }

    const getFetch = async () => {

        if (localCache[url]) {
            setState({ data: localCache[url], isLoading: false, hasError: false, error: null });
            return;
        }

        setLoadingState();

        const response = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!response.ok) {
            setState({ data: null, isLoading: false, hasError: true, error: { code: response.status, message: response.statusText } });
            return;
        }

        const data = await response.json();
        setState({ data: data, isLoading: false, hasError: false, error: null });

        localCache[url] = data;
    }

    return { data: state.data, isLoading: state.isLoading, hasError: state.hasError };
}