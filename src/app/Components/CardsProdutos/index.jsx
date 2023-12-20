import Image from "next/image";
import Link from "next/link";
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
  ean,
}) => {
  return (
    <Link href={`/produto/${ean}`} key={ean}>
    <div className="flex flex-col py-[1rem] mx-auto max-w-[287px] w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
      <div className=" w-full relative h-[255px] rounded-[10px] bg-[#F4F4F4] flex justify-center items-center">
        {promoQtd && (
          <span className="absolute z-50 top-[11px] left-[13px]  bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            {promoQtd}
          </span>
        )}
        {promoNovo && (
          <span className="absolute top-[11px] left-[13px] z-50 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            {promoNovo}
          </span>
        )}
         {promoValor && (
            <div
              className="bg-primaria  absolute top-[216px] inline-flex justify-center items-center  w-full py-[10px] text-amarelo-mostarda font-bold 
          rounded-b-xl leading-[normal]"
            >
              {promoValor}
            </div>
          )}
        <div className="w-full max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px]">
          <Image
            className="object-cover"
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
    </Link>
  );
};

export default Cards;
