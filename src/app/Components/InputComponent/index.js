import React from 'react'

// type TipoIcone = ReactNode;
export default function Input({icone, label, tipo = 'text', placeholder,obrigatorio = false,}){
    return (
      <div className="flex items-center gap-4 py-0 px-2 border border-solid border-[#D9D9D9] rounded-xl">
          <div className="text-[24px]">{icone}</div>
          <div className="flex flex-col py-2">
              <label className="text-[12px] text-[#797777]">{label}</label>
              <input className="text-[16px] bg-transparent text-[#000000] border-none font-semibold
                focus:shadow-none focus:outline-none placeholder:text-[14px]"
                  type={tipo}
                  placeholder={placeholder}
                  required={obrigatorio}
              />
          </div>
      </div>
    )
  }