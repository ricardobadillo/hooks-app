import { useEffect, useReducer } from 'react';
import { todoReducer } from '../useReducer/TodoReducer';
import { Todo } from '../models/todo';

const initialState: Array<Todo> = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDeleteTodo = (todo: Todo) => {
        dispatch({ payload: todo, type: '[TODO] Delete Todo' });
    }

    const handleToggleTodo = (todo: Todo) => {
        dispatch({ payload: todo, type: '[TODO] Toggle Todo' });
    }

    const handleNewTodo = (newTodo: Todo) => {
        dispatch({ payload: newTodo, type: '[TODO] Add Todo' });
    }

    return { todos, todosCount: todos.length, todosPending: todos.filter(todo => !todo.done).length, handleDeleteTodo, handleToggleTodo, handleNewTodo };
}
