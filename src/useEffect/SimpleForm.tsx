import { SyntheticEvent, useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [ formState, setFormState ] = useState({ username: 'ricardo', email: 'ricardo@gmail.com' });
    const { username, email } = formState;

    const onInputChange = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;

        setFormState({ ...formState, [ name ]: value });
    }

    useEffect(() => {
    }, [ ]);

    useEffect(() => {
    }, [ formState ]);

    useEffect(() => {
    }, [ email ]);

    return (
        <>
            <h1> Formulario Simple </h1>
            <hr/>

            <input name="username" placeholder="Username" type="text"
                value={username} onChange={onInputChange} />

            <input name="email" placeholder="fernando@google.com" type="email"
                value={email} onChange={onInputChange} />

            {
                (username === 'ricardo2') && <Message />
            }
        </>
    )
}