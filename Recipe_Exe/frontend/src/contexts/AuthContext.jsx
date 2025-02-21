import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext()

// the parameters are hard coded
// action = javascript object with type and payload
let AuthReducer = (state,action) => {
    switch(action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload))
            console.log("action hit", action.payload)
            return {user : action.payload}
        case 'LOGOUT':
            localStorage.removeItem('user')
            return {user : null}
        default: 
            return state
    }
}

const AuthContextProvider = ({children}) => {

    let [state, dispatch] = useReducer(AuthReducer, {
        user : null
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/users/me');
                let user = res.data;
                if (user) {
                    dispatch({ type: 'LOGIN', payload: user });
                } else {
                    dispatch({ type: 'LOGOUT' });
                }
            } catch (e) {
                dispatch({ type: 'LOGOUT' });
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 

export { AuthContext, AuthContextProvider };

