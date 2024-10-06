import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1> Counter con Hook: { counter } </h1>
            <hr/>

            <button onClick={ () => increment() }> +1 </button>
            <button onClick={ reset }> Reset </button>
            <button onClick={ () => decrement() }> -1 </button>
        </>
    );
}