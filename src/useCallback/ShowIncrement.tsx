import React from "react";

export const ShowIncrement = React.memo(({ increment }: { increment: (value: number) => void }) => {
    console.log('Me he vuelto a generar :(');

    return (
        <>
            <button onClick={ () => increment(5) }> Incrementar </button>
        </>
    );
});