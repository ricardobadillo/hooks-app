import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { username, email, password, onInputChange, onResetForm } = useForm(
        { username: '', email: '', password: '' }
    );

    return (
        <>
            <h1> Formulario con custom Hook </h1>
            <hr/>

            <input name="username" placeholder="Username" type="text"
                value={username} onChange={onInputChange} />

            <input name="email" placeholder="Correo electrónico" type="email"
                value={email} onChange={onInputChange} />

            <input name="password" placeholder="Contraseña" type="password"
                value={password} onChange={onInputChange} />

            <button onClick={onResetForm}> Borrar </button>
        </>
    )
}
