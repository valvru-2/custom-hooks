

export const TodoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case '[TODO] Add todo':
            
            return [...initialState, action.payload]

        case '[TODO] Delete todo':
            return initialState.filter( todo => todo.id !== action.payload )

        case '[TODO] Toggle todo':
            return initialState.map( todo => {

                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            } )
    
        default:
            return initialState;
    }
}
