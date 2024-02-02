import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTimer from "../../Hooks/useTimer";

const CardFidelidade = ({ imagem, promoValor, promoQtd,nome,pontos }) => {
  const [dia, hora, minuto, segundos] = useTimer(promoValor)
  return (
    <div className="flex flex-col py-[1rem] max-w-[306px] 3xl:w-[306px] mx-auto w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
      <div className=" w-full relative h-[255px] rounded-[10px] bg-[#F4F4F4] flex justify-center items-center">
        {promoQtd && (
          <span className="absolute z-20 top-[11px] left-[13px]  bg-verde-escuto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
            {promoQtd}
          </span>
        )}
        {/* {promoNovo && (
              <span className="absolute top-[11px] left-[13px] z-20 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
                {promoNovo}
              </span>
            )} */}
        {/* {dataProdutoNovo(dataFormatada) < 30 ? (
                <span className="absolute top-[11px] left-[13px] z-20 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
                  {"Novo"}
                </span>
              ) : (
                ""
              )} */}
        {promoValor && (
          <div
            className="bg-verde-escuto  absolute top-[216px] inline-flex justify-center items-center  w-full py-[10px] text-branco font-bold 
                rounded-b-xl leading-[normal]"
          >
            Acaba em : {dia}d {hora}:{minuto}:{segundos} 
          </div>
        )}
        <div className="w-full max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px]">
          {/* <Link> */}
            <Image
              className="object-cover"
              src={imagem}
              width={198}
              height={186}
              alt=""
            />
          {/* </Link> */}
        </div>
      </div>
      <div className="text-center mt-[20px] mb-[12px] px-1 w-full">
        <p className="font-semibold text-[18px] leading-[140%] pb-[10px] lowercase">
          {nome}
        </p>
        <p className="text-roxo text-[20px] font-bold leading-[normal]">
          {pontos} <span className="text-[14px]">por un</span>
        </p>
      </div>
      <button className="bg-primaria w-full rounded-[10px] py-[14px] border-[1px] border-solid border-[#DCB000] font-bold">Resgatar</button>
    </div>
  );
};

export default CardFidelidade;
