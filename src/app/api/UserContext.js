'use client'
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);

 useEffect(() => {
   async function fetchData() {
     const result = await checkToken();
     setUser(result);
   }
   fetchData();
 }, []);

 return (
   <UserContext.Provider value={user}>
     {children}
   </UserContext.Provider>
 );
};
