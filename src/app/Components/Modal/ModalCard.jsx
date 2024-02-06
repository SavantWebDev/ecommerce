"use client";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "../../../../public/images/assets/close.svg";
import Image from "next/image";
import { CarrinhoContext } from "../context/CarrinhoContext";
import ModalContext from "../context/ModalContext";

const ModalCard = ({ isOpen, setOpen, produt, qnt }) => {
  const {
    carrinhoLocalStorage,
    setCarrinhoLocalStorage,
    adicionarProdutoLocalStorage,
    adicionarProdutoApi,
    setCarrinhoApi,
  } = useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(1);
  const [variacao, setVariacao] = useState("");

  const {
    isOpenModal,
    setIsOpenMOdal,
    produto,
    quantidadeModal,
    setQuantidadeModal,
  } = useContext(ModalContext);

  //   useEffect(() => {
  //     if (isOpenModal) {
  //       setQuantidadeModal(quantidadeModal);
  //     }
  //  }, [isOpenModal, quantidadeModal]);

  console.log(produto);

  function addQuantidade() {
    const add = quantidadeModal + 1;
    setQuantidadeModal(add);
    console.log(quantidadeModal);
  }

  function removeQuantidade() {
    const remove = quantidadeModal > 1 ? quantidadeModal - 1 : 1;
    setQuantidadeModal(remove);
  }
  return isOpenModal ? (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-cor-preto/[.40] backdrop-blur-[2px] z-[99] overflow-hidden ">
      <div className="text-center relative bg-branco top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-14 py-10 rounded-lg max-w-[409px] mn:max-3xl:max-w-[409px] w-full mb:max-mn:max-w-[310px]">
        <div
          className="cursor-pointer absolute top-[7px] right-3"
          onClick={() => setIsOpenMOdal(!isOpenModal)}
        >
          <Image
            src={CloseIcon}
            width={25}
            height={25}
            className="text-right top-0 right-0"
          />
        </div>
        <div className="flex flex-col items-center mb-5">
          <h2 className="text-xl font-semibold mb-5">Selecionar Variação</h2>
          <div className="flex gap-[10px]">
            <button
              className={
                variacao === "Natural"
                  ? `bg-cor-preto text-branco font-medium leading-[normal]
                inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-cor-preto`
                  : "bg-branco-medio text-cinza-medio-f leading-[normal] inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-branco-medio-m"
              }
              onClick={() => setVariacao("Natural")}
            >
              Natural
            </button>
            <button
              className={
                variacao === "Gelada"
                  ? `bg-cor-preto text-branco font-medium leading-[normal]
             inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-cor-preto`
                  : "bg-branco-medio text-cinza-medio-f leading-[normal] inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-branco-medio-m"
              }
              onClick={() => {
                setVariacao("Gelada"), console.log(variacao);
              }}
            >
              Gelada
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px] mn:w-full sm:mx-auto lg:w-full lg:order-3 mt-[10px] mb-[10px]">
          <p className="text-cinza-medio font-medium leading-[normal]">
            Quant.
          </p>
          <div className="flex p-5 justify-between items-center rounded-[10px] border border-solid border-cinza-medio-c w-full">
            <button className="text-2xl font-bold" onClick={removeQuantidade}>
              -
            </button>
            <p className="font-bold">{quantidadeModal}</p>
            <button
              className="text-amarelo-medio-m text-2xl font-bold"
              onClick={addQuantidade}
            >
              +
            </button>
          </div>
          <div className="flex justify-between w-full lg:flex">
            <button
              className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5"
              value={6}
              onClick={(e) =>
                quantidadeModal === 1
                  ? setQuantidadeModal(
                      Number(e.target.value) + quantidadeModal - 1
                    )
                  : setQuantidadeModal(Number(e.target.value) + quantidadeModal)
              }
            >
              + 6 un.
            </button>
            <button
              className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5"
              value={12}
              onClick={(e) =>
                quantidadeModal === 1
                  ? setQuantidadeModal(
                      Number(e.target.value) + quantidadeModal - 1
                    )
                  : setQuantidadeModal(Number(e.target.value) + quantidadeModal)
              }
            >
              + 12 un.
            </button>
          </div>
        </div>
        <button
          className="bg-primaria w-full py-3 text-xl font-semibold rounded-[10px] mt-5"
          onClick={() => {
            const token = localStorage.getItem("token");
            console.log(token);
            if (token) {
              adicionarProdutoApi(produto, quantidadeModal, variacao);
            } else if (!token) {
              console.log("slavar Local", produto);
              adicionarProdutoLocalStorage(produto, quantidadeModal, variacao);
            }
            setIsOpenMOdal(!isOpenModal);
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalCard;
