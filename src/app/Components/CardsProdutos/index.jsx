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
        {promoQtd && <span className="relative top-[10px]  bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoQtd}</span>}
        {promoNovo && <span className="relative top-[10px]  bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoNovo}</span>}
        {/* <span className="relative top-[20px] bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoQtd}</span> */}
        {/* <span className="relative top-[20px] bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">{promoNovo}</span> */}
        <div className="w-full max-h-[225px] h-[225px] text-center">
          <Image className="my-0 mx-auto pt-[10px]" src={imagem} width={198} height={186} alt="" />
          {promoValor && <div className="bg-primaria w-full py-[10px] text-amarelo-mostarda font-bold 
          rounded-b-xl leading-[normal]">
            {promoValor}
          </div>}
          {/* <div className="bg-primaria w-full py-[10px] text-amarelo-mostarda font-bold 
          rounded-b-xl leading-[normal]">
            {promoValor}
          </div> */}
        </div>
      </div>
      <div className="text-left pt-[20px]">
        <p className="font-semibold text-[24px] leading-[25.2px] pb-[10px]">
          {nome}
        </p>
        <p className="text-cinza leading-[normal]">{a}</p>
        <p className="text-primaria text-[24px] font-bold leading-[normal] pb-[2px]">
          {valor}
        </p>
        <p className="text-cinza leading-[normal]">{parcelas}</p>
      </div>
    </div>
  );
};

export default Cards;
