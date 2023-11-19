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
    <div className="flex items-center w-[463px] gap-4 py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
      <div className="text-[24px]">{icone}</div>
      <div className="flex flex-col py-2">
        <label className="text-[12px] font-semibold text-[#797777]">{label}</label>
        <div className="flex">
          <input
            type={tipo === "password" && mostrarSenha ? "text" : tipo}
            className="text-[16px] text-[#000000] border-none font-semibold
            focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
            // type={tipo}
            placeholder={placeholder}
            required={obrigatorio}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
          />
          {tipo === "password" && (
           <span onClick={aoEsconderSenha}>
             {mostrarSenha ? esconderIcone : mostrarIcone}
           </span>
         )}
        </div>
      </div>
    </div>
  );
}