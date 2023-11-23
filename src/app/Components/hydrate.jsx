"use client";

import { useEffect, useState } from "react";

export default function Hydrate({ children, data }) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
   
    return isMounted && data ? <>{children}</> : <span>Carregando...</span>
   }
   