import { useState } from "react"

export const useCounter = (initialValue = 1) => {
    const [ counter, setCounter ] = useState<number>(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value );
    }

    const decrement = (value = 1) => {
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { counter, increment, decrement, reset };
}