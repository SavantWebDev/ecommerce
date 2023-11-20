'use client'
import React, { useState } from "react";

// type TipoIcone = ReactNode;
export default function Input({
  icone,
  label,
  tipo = "text",
  placeholder,
  obrigatorio = false,
  mostrarIcone,
  esconderIcone,
  valor,
  aoAlterado
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const aoEsconderSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="flex items-center w-full mx-auto gap-4 py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
      <div className="text-[24px]">{icone}</div>
      <div className="flex flex-col justify-center w-full py-2 relative">
        <label className="text-[12px] w-40 font-semibold text-[#797777]">{label}</label>
        <div className="w-full">
          <input
            type={tipo === "password" && mostrarSenha ? "text" : tipo}
            className="text-[16px] text-[#000000] border-none w-full font-semibold
            focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
            // type={tipo}
            placeholder={placeholder}
            required={obrigatorio}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
          />
          
        </div>
        {tipo === "password" && (
           <span className="absolute right-0" onClick={aoEsconderSenha}>
             {mostrarSenha ? esconderIcone : mostrarIcone}
           </span>
         )}
      </div>
    </div>
  );
}