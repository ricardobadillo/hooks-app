import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';
import './TodoApp.css';

export const TodoApp = () => {
    const { todos, todosCount, todosPending, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

    return (
        <>
            <h1>TodoApp</h1>
            <p> Tareas: {todosCount} | Tareas pendientes: {todosPending} </p>
            <hr />

            <div className="todos-container">
                <TodoList
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />

                <div>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
}
