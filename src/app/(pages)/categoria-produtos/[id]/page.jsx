"use client"
import React from "react";
import { FaListUl } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import Cards from "../../../Components/CardsProdutos";
import Newsletter from "../../../Components/Newsletter";
import { Pagination } from "@nextui-org/react";
import Paginacao from "../../../Components/Pagination/index"
import { getCategoryProduct } from "../../../api/apiEcommerce";
import { useState, useEffect } from "react";

export default function Page({params}) {
    console.log("===================")
    if(params.id.includes("%20")){
      // console.log(params.id.split("%20"))
      var parametro = params.id.split("%20")[0]+ " " + params.id.split("%20")[1]
    }
    const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchCategoriasProdutos() {
      const resultado = await getCategoryProduct(params.id);
      console.log(resultado);
      setProdutos(resultado);
    }

    fetchCategoriasProdutos();
  }, []);
  console.log(produtos)
  return (
    <section className="max-w-[1416px] w-full h-full mx-auto px-5 pt-10">
      <div className="bg-teste bg-cover bg-no-repeat bg-center min-h-[253px] h-full max-w-full w-[1519px] rounded-[15px] "></div>
      {/* <Image className='max-w-full w-[1519px] h-[253px]' src={banner2} alt=''/> */}
      {/* Header pagina */}
      <div className="flex justify-between sm:max-2xl:flex-row items-center sm:max-2xl:items-center text-cor-preto mt-[50px] mb:max-mn:flex-col mb:max-mn:items-start mb:max-mn:gap-3">
        <h3 className="mn:max-2xl:text-[24px] text-[24px] font-semibold leading-[normal]">{params.id.includes("%20")? parametro: params.id}</h3>
        <div className="flex items-center w-auto gap-[2.75rem] mb:max-mn:w-full sm:justify-between sm:w-auto mn:justify-between 
        mn:w-auto mb:justify-between mb:w-full">
          <div className="flex items-center gap-[1rem] sm:max-2xl:order-1 mb:max-mn:order-4">
            <span className="text-[32px] text-cinza cursor-pointer">
              <FaListUl />
            </span>
            <span className="text-[32px] text-primaria cursor-pointer">
              <LuLayoutGrid />
            </span>
          </div>
          <p className="flex flex-col text-cinza text-[16px] leading-[normal] sm:max-2xl:order-4  mb:max-mn:order-1 mb:max-mn:text-[11.237px]">
            Resultados:
            <span className="text-cor-preto text-[24px] font-semibold leading-[normal] mb:max-mn:text-[16.856px]">
              115 itens
            </span>
          </p>
        </div>
      </div>

      {/* cards produtos */}
      <section className="mt-[30px]">
        <div className="flex overflow-x-auto w-full gap-[1.25rem] mb-[80px]  mn:overflow-x-auto  mn:w-auto">
          <button className="text-cor-preto bg-primaria px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]">
            Recomendados
          </button>
          <button className="text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]">
            Entrega grátis
          </button>
          <button className="text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]">
            Mais Vendidos
          </button>
          <button className="text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]">
            Promoções
          </button>
        </div>
        <div className="grid justify-center items-center 2xl:grid-cols-4 xl:grid-cols-4 gap-10  lg:items-center md:grid-cols-3 mn:max-md:grid-cols-2 mb:max-mn:grid-cols-1">
          <Cards
            imagem={"/images/Produtos/image 73.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 73.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            // promoQtd="Compre 3 leve 1"
            promoNovo="Novo"
            promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 27.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            // promoQtd="Compre 3 leve 1"
            promoNovo="Novo"
            promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 28.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 42.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 43.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 44.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 45.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 42.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 43.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 44.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 45.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 42.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 43.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 44.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 45.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          />
        </div>
        <div className="flex justify-center pt-[80px] pb-[120px] items-center">
          
          <Paginacao />
        </div>
      </section>
      
    </section>
  );
}