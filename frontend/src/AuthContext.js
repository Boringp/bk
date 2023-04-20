import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                sessionId: action.payload.sessionId,
                email: action.payload.email,
                userId: action.payload.userId,}
        case 'LOGOUT':
            return {  sessionId: null, email: null, userId: null};
        default:
            return state;}}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer,{
     sessionId: null, email: null, userId: null
  })
    return (    
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>)
};