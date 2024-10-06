import React, { useCallback } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];
    const [ value, setValue ] = React.useState(0);

    const memorizedFn = useCallback((valueToIncrement: number) => {
        setValue((c) => c + valueToIncrement);
    }, []);

    return (
        <>
            <h1> Padre </h1>
            <p> { value } </p>

            <hr/>

            {
                numeros.map((n) => (
                    <Hijo key={n} numero={n} increment={memorizedFn} />
                ))
            }
        </>
    );
}