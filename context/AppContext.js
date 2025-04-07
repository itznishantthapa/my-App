// AppContext.js
import React, { createContext, useState, useReducer } from 'react';
import { user_details_initial_state,user_details_reducer } from '../userReducer/userDetails';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
const [user, setUser] = useState('abc');
const [state, dispatch] = useReducer(user_details_reducer, user_details_initial_state)

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        state,
        dispatch
      }}>
      {children}
    </AppContext.Provider>
  );
};
