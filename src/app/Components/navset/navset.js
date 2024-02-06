'use client'
import { checkToken } from '@/app/api/api';
import React, { useState, useEffect, createContext } from 'react';

export const NavContext = createContext();

export default function NavSet() {
  const [nav, setNav] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await checkToken();
      setNav(result);
    }
    fetchData();
  }, []);

  return (
    <NavContext.Provider value={nav}>
      {/* outros componentes aqui */}
    </NavContext.Provider>
  );
}
