import Image from "next/image";
import React from "react";

const CardsAluguel = ({
  imagem,
  aluguel,
  nome,
  a,
  valor,
  parcelas,
}) => {
  return (
    <div className="flex flex-col py-[1rem] w-full  justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
      <div className=" w-full h-[255px] rounded-[10px] bg-[#F4F4F4] flex justify-center items-center">
          <span className="absolute z-50 top-[25px] right-[13px]  bg-amarelo-claro text-neutral-dark py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            Aluguel
          </span>
        <div className="w-full relative max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px]">
          <Image
            className="object-cover mix-blend-multiply"
            src={imagem}
            width={198}
            height={186}
            alt=""
          />
        </div>
      </div>
      <div className="text-left mt-[20px] px-1 w-full">
        <p className="font-semibold text-[18px] leading-[140%] pb-[10px] lowercase">
          {nome} 
        </p>
        <p className="text-cinza text-[16px] line-through leading-[normal]">{a}</p>
        <p className="text-primaria text-[24px] font-semibold leading-[normal] pb-[2px]">
          {valor} <span className="text-xl font-semibold leading-[normal]"> no pix</span> 
        </p>
        <p className="text-cinza text-[16px] leading-[normal]">{parcelas}</p>
      </div>
    </div>
  );
};

export default CardsAluguel;
