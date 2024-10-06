import React from 'react';

export const Hijo = React.memo(({ numero, increment }: { numero: number, increment: (value: number) => void }) => {
    console.log('Me volví a generar :(');

    return (
        <>
            <button onClick={ () => increment(numero) }> { numero } </button>
        </>
    );
});