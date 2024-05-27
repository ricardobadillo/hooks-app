import { useCounter, useFetch } from "../hooks"

export const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter();
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    return (
        <>
            <h1> Información del Pokémon </h1>
            <hr/>

            { isLoading && <p> Cargando... </p> }

            <div>
                <img src={ data?.sprites.front_default } alt={ data?.name } />
                <img src={ data?.sprites.front_shiny } alt={ data?.name } />
                <img src={ data?.sprites.back_default } alt={ data?.name } />
                <img src={ data?.sprites.back_shiny } alt={ data?.name } />
            </div>

            { counter > 1 && <button onClick={() => decrement()}> Anterior </button> }

            <button onClick={() => increment()}> Siguiente </button>
        </>
    )
}
