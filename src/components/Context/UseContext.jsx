import {createContext, useContext, useState} from 'react';

const Context = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(false);

    return (
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context);
