import { SyntheticEvent, useState } from 'react';

export const useForm = <T extends object>(initialForm = {} as T) => {
    const [ formState, setFormState ] = useState<T>(initialForm);

    const onInputChange = (event: SyntheticEvent) => {
        const { name, value } = event.target as HTMLInputElement;

        setFormState({ ...formState, [name]: value });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return { ...formState, formState, onInputChange, onResetForm };
}