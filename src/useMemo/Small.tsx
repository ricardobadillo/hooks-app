import React from "react";

export const Small = React.memo(({ value }: { value: number }) => {

    console.log('Me he vuelto a llamar :(');

    return (
        <>
            <small> { value } </small>
        </>
    );
});