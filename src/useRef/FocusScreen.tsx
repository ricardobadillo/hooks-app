import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if(inputRef.current) inputRef.current.select();
    }

    return (
        <>
            <div> Focus screen </div>
            <hr/>

            <input ref={inputRef} placeholder="Ingrese su nombre" type="text"/>
            <button onClick={onClick}> Set focus </button>
        </>
    );
}