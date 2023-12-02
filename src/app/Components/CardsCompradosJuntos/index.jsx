import Image from "next/image";
import React from "react";
import check from "../../../../public/images/assets/check-icon.svg";

const CardJuntos = ({ imagem }) => {
  return (
    <div className="max-w-[190px] w-full px-[14px]  relative">
      <div className=" max-w-[28px] w-full h-[28px] rounded-[50%] bg-verde-medio flex justify-center items-center absolute top-[3px] right-[-8px] ">
        <Image src={check} width={18} height={18} />
      </div>
      <div className="max-w-[162px] w-full h-[143.937px] rounded-[5.645px] bg-branco mb-[6.06px]">
        <Image
          className="mt-[6px] mb-[3.94px] mr-[14px] ml-[13px]"
          src={imagem}
          width={135}
          height={134}
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-suport-dark font-semibold leading-[normal] mb-[6.01px]">
          Whisky Johnnie Walker Green Label 750 ml
        </p>
        <p className="text-cinza-claro font-medium leading-[normal] line-through">
          R$ 50,00
        </p>
        <p className="text-amarelo-medio text-xl font-bold leading-[normal] mb-[4.58px]">
          R$ 50,00{" "}
          <span className="text-amarelo-medio text-xs font-semibold leading-[normal]">
            no pix
          </span>
        </p>
        <p className="text-cinza-claro-c text-sm leading-[normal]">
          até 4x sem juros
        </p>
      </div>
    </div>
  );
};

export default CardJuntos;
