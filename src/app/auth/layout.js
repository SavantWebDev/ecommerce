import React from "react";
import Image from "next/image";
import Hydrate from "../Components/hydrate";


export default function LayoutAuth({ children }) {
  return (
    <main className="h-screendv ">
      {children}
    </main>
  );
}
