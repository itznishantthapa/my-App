// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [user, setUser] = useState('abc');




  return (
    <AppContext.Provider
     value={{
         user, 
         setUser
          }}>    
      {children}
    </AppContext.Provider>
  );
};
