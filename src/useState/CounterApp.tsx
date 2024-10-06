import { useState } from 'react';

export const CounterApp = () => {
    const [ state, setCounter ] = useState({
        firstCounter: 10,
        secondCounter: 20,
        thirdCounter: 30
    });

    const { firstCounter, secondCounter, thirdCounter } = state;

    const handleClick = () => {
        setCounter({ ...state, firstCounter: firstCounter + 5 });
    }

    return (
        <>
            <h1> useState </h1>
            <hr />

            <p> Primer contador: { firstCounter } </p>
            <p> Segundo contador: { secondCounter } </p>
            <p> Tercer contador: { thirdCounter } </p>
            <hr/>

            <button onClick={ handleClick }> +5 </button>
        </>
    );
}
