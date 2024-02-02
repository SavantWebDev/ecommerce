"use client";
import Image from "next/image";
import React, { useState } from "react";
import fechar from "/public/images/assets/fechar.svg";
import Modalimg from "../../../../public/images/Modalfidelidade.svg";

const ModalFidelidade = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if ((index + 1) % modalInfo.length === 0) {
      setIsOpen(false); // Fecha a modal
   } else {
      setIndex((prevIndex) => (prevIndex + 1) % modalInfo.length);
   }
   };
   
   const handlePreviousClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + modalInfo.length) % modalInfo.length);
   };

  const mudaEstado = () => {
    setIsOpen(false);
  };

  const modalInfo = [
    {
      id: "01",
      img: "/images/Modalfidelidade.svg",
      texto: "Você escolhe como quer juntar pontos. Existem várias formas pra todos os gostos.",
    },
    {
      id: "02",
      img: "/images/Modalfidelidade.svg",
      texto: "Você escolhe como quer juntar pontos. Existem várias formas pra todos os gostos.T2",
    },
    {
      id: "03",
      img: "/images/Modalfidelidade.svg",
      texto: "Você escolhe como quer juntar pontos. Existem várias formas pra todos os gostos.T3",
    },
    {
      id: "04",
      img: "/images/Modalfidelidade.svg",
      texto: "Você escolhe como quer juntar pontos. Existem várias formas pra todos os gostos.T4",
    },
  ]

  return isOpen ? (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-cor-preto/[.40] backdrop-blur-[2px] z-[99] overflow-hidden ">
      <div className="relative bg-branco top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-6 py-10 rounded-3xl max-w-[409px]">
        <button
          onClick={mudaEstado}
          className="bg-[#EA1D2C] w-8 h-8 flex items-center justify-center rounded-full absolute top-[-9px] right-[-7px]"
        >
          <Image src={fechar} width={24} height={24} alt="Fechar" />
        </button>
        <div>
          <h3 className="mb-5 font-bold">Como funciona o sistema de pontos da Iceberg ?</h3>
          <div>
            <div className="bg-cor-preto pt-5 px-5 rounded-[20px] flex flex-col items-center justify-center gap-5 pb-10">
              <div>
                <Image
                  src={modalInfo[index].img}
                  width={393}
                  height={198}
                  alt="Modal SVG"
                />
              </div>
              <div className="flex gap-4 items-center justify-center ">
                <span className="bg-amarelo-medio-m px-3 py-2 font-bold rounded-[8px]">
                {modalInfo[index].id}
                </span>
                <p className="text-branco font-bold text-sm">
                {modalInfo[index].texto}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
              <span className="rounded-full bg-primaria inline-flex h-3 w-3"></span>
              <span className="rounded-full bg-primaria inline-flex h-3 w-3"></span>
              <span className="rounded-full bg-primaria inline-flex h-3 w-3"></span>
              <span className="rounded-full bg-primaria inline-flex h-3 w-3"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button onClick={handlePreviousClick} className="bg-cor-preto text-branco text-xl font-semibold px-6 py-3 rounded-[40px]">Anterior</button>
          <button onClick={handleNextClick} className="bg-primaria text-xl font-semibold px-6 py-3 rounded-[40px]">Próximo</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalFidelidade;
