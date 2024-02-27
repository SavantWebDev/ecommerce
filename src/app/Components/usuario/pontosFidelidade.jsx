"use client";
import { useEffect, useState } from "react";
import { FaRegSnowflake } from "react-icons/fa6";

export default function PtsFidelidade({ icone, text, pontos }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      setLoading(false);
      // Marca que o usuário já visitou a página
      localStorage.setItem("hasVisited", "true");
    }
  }, []);
  return (
    <div className="bg-branco max-w-[382.5px] w-full flex items-center justify-center rounded-[20px] py-[27px] gap-5 ">
      {loading ? (
        <div className="w-full animate-pulse flex items-center justify-center gap-5">
          <div className="">
            <div className="h-4 bg-cinza-claro w-32 mb-2 rounded-xl"></div>
            <div className="h-4 bg-cinza-claro w-32 rounded-xl "></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 max-mc:flex-col max-mc:text-center max-mc:gap-2">
          {icone}
          <div className="">
            <h1 className="text-base font-nnormal text-amarelo-mostarda">
              {text}
            </h1>
            <p className="text-2xl max-mc:text-lg text-amarelo-mostarda font-bold">
              {pontos}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
