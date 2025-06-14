import { useEffect, useReducer } from "react"
import { TodoReducer } from "../08-useReducer/TodoReducer";



export const useTodos = () => {
    
    const initialState = [];
    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) ) || []
    };

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) || [] )
    }, [todos]) 

    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
    
        dispatch( action )        
    }
    const handleDeleteTodo = ( id ) => {
    
        dispatch( {
            type: '[TODO] Delete todo',
            payload: id
        } )        
    }
    const handleToggleTodo = ( id ) => {
         
        dispatch( {
            type: '[TODO] Toggle todo',
            payload: id
        } )        
    }

    const allTodosCount = todos.length

    const pendingTodosCount = todos.filter( todo => !todo.done ).length

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    allTodosCount,
    pendingTodosCount
  }
}
