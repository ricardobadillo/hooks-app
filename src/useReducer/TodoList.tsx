import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

interface Props {
    onDeleteTodo: (todo: Todo) => void;
    onToggleTodo: (todo: Todo) => void;
    todos: Array<Todo>;
}

export const TodoList: React.FC<Props> = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <ul>
            {
                todos.map((todo: Todo, index: number) => (
                    <TodoItem
                        key={todo.id}
                        index={index + 1}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    );
}
