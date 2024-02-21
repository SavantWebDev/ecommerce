"use client";
import React from "react";
import { FaListUl } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Cards from "../../../Components/CardsProdutos";
import Pagi from "../../../Components/Pagination";
import {
  buscaProduto,
  buscaProdutoPagina,
  getCategoryProduct,
} from "../../../api/apiEcommerce";
import { useSearchParams } from "next/navigation";
import ModalCard from "../../../Components/Modal/ModalCard";
import { ChevronIcon } from "../../../Components/Pagination/ChevronIcon";

export default function Page({ params }) {
  console.log(params);

  console.log(params.produto);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const produtoDecodificado = decodeURIComponent(params.produto);
  console.log(
    "🚀 ➽ file: page.jsx:22  ➽ Page  ➽ produtoDecodificado ⏩",
    produtoDecodificado
  );
  const [produtos, setProdutos] = useState([]);
  const [pagina, setPagina] = useState();
  const [totalPaginas, setTotalPaginas] = useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  // console.log(params.id)
  // console.log(params.page)
  useEffect(() => {
    async function fetchBuscaProdutos() {
      const resultado = await getCategoryProduct(params.produto);
      console.log(resultado);
      setProdutos(resultado.produtos);
      setButtonDisabled(true);
      setPagina(resultado.page);
      setTotalPaginas(resultado.totalpaginas);
    }

    fetchBuscaProdutos();
  }, [params.produto]);
  console.log(produtos);
  console.log(pagina);
  console.log(totalPaginas);

  function setPage(produto, pageNumber) {
    buscaProdutoPagina(produto, pageNumber).then((products) => {
      // Atualiza o estado dos produtos com os novos produtos
      setProdutos(products);
      console.log(
        "🚀 ➽ file: page.jsx:42  ➽ buscaProdutoPagina  ➽ products ⏩",
        products
      );
      console.log(
        "🚀 ➽ file: page.jsx:43  ➽ buscaProdutoPagina  ➽ products ⏩",
        pageNumber
      );
      console.log(
        "🚀 ➽ file: page.jsx:44  ➽ buscaProdutoPagina  ➽ products ⏩",
        produto
      );
    });
  }

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      if (currentPage === 10) {
        return null; // Hide PREV on the first page
      }
      return (
        <button
          key={key}
          className={cn(className, "bg-primaria min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      if (currentPage === 1) {
        return null; // Hide PREV on the first page
      }
      return (
        <button
          key={key}
          className={cn(className, "bg-primaria min-w-8 w-8 h-8")}
          onClick={onPrevious}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive &&
            "text-white bg-primaria from-indigo-500 to-pink-500 font-bold"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <section className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5 mx-auto px-0 pt-10">
      {/* <div className="bg-teste bg-cover bg-no-repeat bg-center min-h-[253px] h-full max-w-full w-[1519px] rounded-[15px] "></div> */}
      {/* <Image className='max-w-full w-[1519px] h-[253px]' src={banner2} alt=''/> */}
      {/* Header pagina */}

      <div className="flex justify-between sm:max-2xl:flex-row items-center sm:max-2xl:items-center text-cor-preto mt-[50px] mb:max-sm:flex-col mb:max-sm:items-start mb:max-mn:gap-3">
        <h3 className="mn:max-2xl:text-[24px] text-[24px] font-semibold leading-[normal] mb:max-mn:whitespace-normal">
          Buscando por{" "}
          <span className="text-amarelo-claro ">“{produtoDecodificado}”</span>
        </h3>
        <div
          className="flex items-center w-auto gap-[2.75rem] mb:max-mn:w-full sm:justify-between sm:w-auto mn:justify-end
        mn:w-auto mb:justify-start mb:w-full"
        >
          {/* <div className="flex items-center gap-[1rem] sm:max-2xl:order-1 mb:max-mn:order-4">
            <span className="text-[32px] text-cinza cursor-pointer">
              <FaListUl />
            </span>
            <span className="text-[32px] text-primaria cursor-pointer">
              <LuLayoutGrid />
            </span>
          </div> */}
          <p className="flex flex-col text-cinza text-[16px] leading-[normal] sm:max-2xl:order-4  mb:max-mn:order-1 ">
            Resultados:
            <span className="text-cor-preto text-[24px] font-semibold leading-[normal] ">
              115 itens
            </span>
          </p>
        </div>
      </div>

      {/* cards produtos */}
      <section className="mt-[30px]">
        {produtos ? (
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
        ) : (
          <div className="flex overflow-x-auto w-full gap-[1.25rem] mb-[80px]  mn:overflow-x-auto  mn:w-auto">
            <button
              disabled={isButtonDisabled}
              className="text-cor-preto bg-primaria px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]"
            >
              Recomendados
            </button>
            <button
              disabled={isButtonDisabled}
              className="text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]"
            >
              Entrega grátis
            </button>
            <button
              disabled={isButtonDisabled}
              className="text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]"
            >
              Mais Vendidos
            </button>
            <button
              disabled={isButtonDisabled}
              className="text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] border border-solid border-cinza-medio-g  rounded-[40px]"
            >
              Promoções
            </button>
          </div>
        )}
        {/* <div className="flex overflow-x-auto w-full gap-[1.25rem] mb-[80px]  mn:overflow-x-auto  mn:w-auto">
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
        </div> */}
        {produtos ? (
          <div className="flex 3xl:gap-[97.3px] 2xl:gap-[76.3px] flex-wrap  items-center xl:gap-[50.3px] mb:max-3xl:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 lg:gap-[9.3px] md:gap-[9.3px] sm:gap-[25.3px] mn:gap-[25.3px] lg:items-center md:grid-cols-3 mn:max-md:grid-cols-2 mb:max-mn:grid-cols-1">
            {produtos.map((produto) => {
              return (
                <Cards
                  key={produto.ean}
                  ean={produto.ean}
                  imagem={produto.image.replace("/", "")}
                  nome={produto.nomeproduto}
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a={produto.valor_pix}
                  valor={produto.valor}
                  parcelas="até 4x sem juros"
                />
              );
            })}
            <ModalCard />
            {/* <Cards
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
          /> */}
            {/* <Cards
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
          /> */}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mb-[20%] mt-[20%] text-2xl font-bold text-center px-2">
            <h1>
              Lamentamos, nenhum produto encontrado com esse critério de
              pesquisa.
            </h1>
            <p>Tente novamente com outro termo para busca...</p>
          </div>
        )}
        <div className="flex justify-center pt-[80px] pb-[120px] items-center">
          <Pagination
            disableCursorAnimation
            showControls
            total={totalPaginas}
            initialPage={1}
            className="gap-2"
            radius="full"
            renderItem={renderItem}
            variant="light"
            onChange={(e) => setPage(params.produto, e)}
          />
        </div>
      </section>
    </section>
  );
}
