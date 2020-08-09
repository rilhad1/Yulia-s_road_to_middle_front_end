import React, {createContext} from 'react'
import {useAuth} from '../hooks/auth.hook';

interface ProviderProps  {
    children: React.ReactNode,
}

function noop(): void {}

const AuthContext: React.Context<any>= createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    ready: false,
    isAuthenticated: false
});

export const AuthProvider = (props: ProviderProps) => {
    const {children} = props;
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    return <AuthContext.Provider value={{token, login, logout, userId, ready, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
};

export default AuthContext;