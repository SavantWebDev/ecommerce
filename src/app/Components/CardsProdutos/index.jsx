"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import SkeletonCards from "../Skeletons/SkeletonCards";
import ModalCard from "../Modal/ModalCard";
import ModalContext from "../context/ModalContext";

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
  loading,
  dataNovo,
}) => {
  let novaData = new Date(dataNovo);
  let dataFormatada = !isNaN(novaData.getTime())
    ? novaData.toISOString().split("T")[0]
    : "Data inválida";
  // console.log("DATA NOVA:", dataFormatada);

  function dataProdutoNovo(data) {
    const dataRegistro = data;
    let dataHoje = new Date();
    let ano = dataHoje.getFullYear();
    let mes = ("0" + (dataHoje.getMonth() + 1)).slice(-2); // Adiciona um zero à frente se o mês for de 1 a 9
    let dia = ("0" + dataHoje.getDate()).slice(-2); // Adiciona um zero à frente se o dia for de 1 a 9
    dataHoje = `${ano}-${mes}-${dia}`;
    const diffInMs = new Date(dataHoje) - new Date(dataRegistro);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays;
  }
  
  const [produtoCard, setProdutoCard] = useState({ean: ean,
    nomeproduto: nome,
    image: imagem,
    valor_pix: a,
    valor: valor,});

  const {isOpenModal,setIsOpenMOdal,produto, setProduto,quantidadeModal, setQuantidadeModal} = useContext(ModalContext)

  const [OpenModal, setOpenModal] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  function addQuantidade() {
    const add = quantidade + 1;
    setQuantidade(add);
    console.log(quantidade);
  }

  function removeQuantidade() {
    const remove = quantidade > 1 ? quantidade - 1 : 1;
    setQuantidade(remove);
  }

  return (
    <div href={`/produto/${ean}`} key={ean}>
      {/* <div className="flex flex-col py-[1rem] mx-auto max-w-[287px] w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto"> */}
      {loading ? (
        <div className="flex flex-col py-[1rem] max-w-[306px] 3xl:w-[306px] mx-auto w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
          <div className=" w-full relative h-[255px] rounded-[10px] bg-cinza-skeleton flex justify-center items-center">
            <div className="w-full max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px] bg-gray-300 animate-pulse">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="text-center mt-[20px] px-1 w-full">
            <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full pb-[10px] animate-pulse"></div>
            <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full animate-pulse"></div>
            <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full pb-[2px] animate-pulse"></div>
            <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full mb-3 animate-pulse"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col py-[1rem] max-w-[306px] 3xl:w-[306px] mx-auto w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
            <div className=" w-full relative h-[255px] rounded-[10px] bg-[#F4F4F4] flex justify-center items-center">
              {promoQtd && (
                <span className="absolute z-20 top-[11px] left-[13px]  bg-cor-preto text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
                  {promoQtd}
                </span>
              )}
              {/* {promoNovo && (
              <span className="absolute top-[11px] left-[13px] z-20 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
                {promoNovo}
              </span>
            )} */}
              {dataProdutoNovo(dataFormatada) < 30 ? (
                <span className="absolute top-[11px] left-[13px] z-20 bg-verde text-branco py-[7px] px-[15px] rounded-[20px] font-semibold text-[14px]">
                  {"Novo"}
                </span>
              ) : (
                ""
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
                <Link href={`/produto/${ean}`} key={ean}>
                  <Image
                    className="object-cover"
                    src={imagem}
                    width={198}
                    height={186}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="text-left mt-[20px] px-1 w-full">
              <p className="font-semibold text-[18px] leading-[140%] pb-[10px] lowercase">
                {nome}
              </p>
              <p className="text-cinza text-[16px] line-through leading-[normal]">
                R$ {valor}
              </p>
              <p className="text-primaria text-[24px] font-semibold leading-[normal] pb-[2px]">
                R$ {a}{" "}
                <span className="text-xl font-semibold leading-[normal]">
                  {" "}
                  no pix
                </span>
              </p>
              <p className="text-cinza text-[16px] leading-[normal]">
                {parcelas}
              </p>
            </div>
            <div className="flex self-start mt-5 gap-[11px] px-1 w-full">
              <button
                className="bg-primaria rounded-[10px] w-[50%] py-[13px] text-xl font-semibold"
                onClick={() => {
                  setIsOpenMOdal(!isOpenModal);
                  setProduto(produtoCard);
                  setQuantidadeModal(quantidade);
                  console.log(
                    "🚀 ➽ file: index.jsx:39  ➽ OpenModal ⏩",
                    OpenModal
                  );
                }}
              >
                Adicionar
              </button>
              <div className="flex justify-between items-center gap-[10px] w-[50%]">
                <button
                  className="bg-[#C7C7C7] w-10 h-10 rounded-full text-[#A9A9A9] font-bold text-xl"
                  onClick={removeQuantidade}
                >
                  -
                </button>
                <p className="w-6 text-center">{quantidade}</p>
                <button
                  className="bg-primaria w-10 h-10 rounded-full text-cor-preto font-bold text-xl"
                  onClick={addQuantidade}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* <ModalCard isOpen={OpenModal} setOpen={setOpenModal} produto={produto} qnt={quantidade} /> */}
        </>
      )}
    </div>
  );
};

export default Cards;
