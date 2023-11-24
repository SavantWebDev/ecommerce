import React from "react";
import Image from "next/image";
import Logo2 from "../../../../public/images/logo2.svg";

export default function LogoForms({ titulo, subtitulo }) {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <Image
        src={Logo2}
        width={155}
        height={103}
        alt="Imagem Logo"
        className=""
      />
      <div className="my-[40px]">
        <h2 className="text-[32px]">{titulo}</h2>
        <p className="text-[#000000] text-[18px] text-center leading-[140%] font-light">
          {subtitulo}
        </p>
      </div>
    </div>
  );
}
