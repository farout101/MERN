import { createContext, useReducer } from "react";

const AuthContext = createContext()

// the parameters are hard coded
// action = javascript object with type and payload
let AuthReducer = (state,action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log("action hit", action.payload)
            return {user : action.payload}
        case 'LOGOUT':
            return {user : null}
        default: 
            return state
    }
}

const AuthContextProvider = ({children}) => {

    let [state, dispatch] = useReducer(AuthReducer, {
        user : null
    })

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 

export { AuthContext, AuthContextProvider };

