// Example using React Context
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = (userData, token) => {
        // Set authenticated to true and store user data
        setAuthenticated(true);
        setUser(userData);
        setToken(token);
    };

    const logout = () => {
        // Set authenticated to false and clear user data
        setAuthenticated(false);
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated, user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
