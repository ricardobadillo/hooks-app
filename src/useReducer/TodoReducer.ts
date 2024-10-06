import { Todo } from "../models/todo";

export const todoReducer = (initialState: Array<Todo> = [], action: { payload: Todo, type: string }) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload.id);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => (todo.id === action.payload.id) ?
                { ...todo, done: !todo.done } : todo);
        default:
            return initialState;
    }
}