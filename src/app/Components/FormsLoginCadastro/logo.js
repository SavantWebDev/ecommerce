import React from "react";
import Image from "next/image";
export default function LogoForms({ titulo, subtitulo }) {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <Image
        src="/images/logo.svg"
        width={155}
        height={103}
        alt="Imagem Logo"
        className=""
      />
      <div className="my-[40px]">
        <h2 className="text-[32px]">{titulo}</h2>
        <p className="text-[#D0D0D0] text-[18px] text-center leading-[140%]">
          {subtitulo}
        </p>
      </div>
    </div>
  );
}
