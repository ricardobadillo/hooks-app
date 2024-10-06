import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

const heavyStuff = (iterations: number) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahí vamos...');
    }

    return `${ iterations } iteraciones realizadas`;
};
export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [ counter ]);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <h1> Counter: <Small value={counter}/> </h1>
            <hr/>

            <p> { memorizedValue } </p>

            <button onClick={ () => increment() }> +1 </button>
            <button onClick={ handleClick }> { show ? 'Mostrar' : 'Ocultar' } </button>
        </>
    )
}
