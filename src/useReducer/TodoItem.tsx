import { Todo } from "../models/todo";
import './TodoItem.css';

interface Props {
    onDeleteTodo: (todo: Todo) => void;
    onToggleTodo: (todo: Todo) => void;
    index: number;
    todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ index, todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li key={todo.id}>
            <span
                className={`${todo.done ? 'complete' : ''}`}
                onDoubleClick={() => onToggleTodo(todo)}>
                {index}. {todo.desc}
            </span>

            <button onClick={() => onDeleteTodo(todo)}>
                Eliminar
            </button>
        </li>
    );
}
