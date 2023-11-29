import Image from "next/image";
import React from "react";

const Cards = ({
  imagem,
  promoQtd,
  promoNovo,
  promoValor,
  nome,
  a,
  valor,
  parcelas,
}) => {
  return (
    <div className="flex flex-col py-[1rem] w-[22%] px-[5px]">
      <div className="w-full">
        {promoQtd && (
          <span className="relative z-50 top-[35px] left-[10px]  bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            {promoQtd}
          </span>
        )}
        {promoNovo && (
          <span className="relative top-[35px] left-[10px] z-50 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            {promoNovo}
          </span>
        )}
        {/* <span className="relative top-[20px] bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoQtd}</span> */}
        {/* <span className="relative top-[20px] bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoNovo}</span> */}
        <div className="w-full relative max-w-[305px] bg-[#F4F4F4] h-[255px] text-center flex flex-col items-center justify-center rounded-[10px] ">
          <Image
            className="object-cover mix-blend-multiply"
            src={imagem}
            width={198}
            height={186}
            alt=""
          />
          {promoValor && (
            <div
              className="bg-primaria absolute bottom-0 w-full py-[10px] text-amarelo-mostarda font-bold 
          rounded-b-xl leading-[normal]"
            >
              {promoValor}
            </div>
          )}
          {/* <div className="bg-primaria w-full py-[10px] text-amarelo-mostarda font-bold 
          rounded-b-xl leading-[normal]">
            {promoValor}
          </div> */}
        </div>
      </div>
      <div className="text-left mt-[20px]">
        <p className="font-semibold text-[18px] leading-[140%] pb-[10px]">
          {nome}
        </p>
        <p className="text-cinza text-[16px] line-through leading-[normal]">{a}</p>
        <p className="text-primaria text-[24px] font-semibold leading-[normal] pb-[2px]">
          {valor}
        </p>
        <p className="text-cinza text-[16px] leading-[normal]">{parcelas}</p>
      </div>
    </div>
  );
};

export default Cards;
