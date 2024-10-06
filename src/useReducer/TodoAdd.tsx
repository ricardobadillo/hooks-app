import { SyntheticEvent } from 'react';
import { useForm } from '../hooks';
import { Todo } from '../models/todo';

interface Props {
    onNewTodo: (todo: Todo) => void;
}

export const TodoAdd: React.FC<Props> = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({ description: '' });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo: Todo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                name="description"
                value={description}
                placeholder="¿Qué hay que hacer?"
                type="text"
                onChange={onInputChange}
            />

            <button type="submit">Agregar</button>
        </form>
    );
}
