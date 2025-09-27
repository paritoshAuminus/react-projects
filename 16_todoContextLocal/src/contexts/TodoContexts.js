import { createContext, useContext } from "react";

/*
This is the short hand way to create and export a context in the same location
to save all the extra file creation and wrapping the <App/>, it also saves extra time 
as now we do not need to import useContext each time we are using the context
*/

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'todo message',
            complete: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider