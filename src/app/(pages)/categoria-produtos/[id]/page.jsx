"use client";
import React from "react";
import { FaListUl } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import Cards from "../../../Components/CardsProdutos";
import Newsletter from "../../../Components/Newsletter";
// import { Pagination } from "@nextui-org/react";
import Paginacao from "../../../Components/Pagination/index";
import {
  buscaProdutoPagina,
  getCategoryProduct,
} from "../../../api/apiEcommerce";
import { useState, useEffect } from "react";
import SkeletonCards from "../../../Components/Skeletons/SkeletonCards";
import Pagi from "../../../Components/Pagination/index";
import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import { ChevronIcon } from "../../../Components/Pagination/ChevronIcon";
import ModalCard from "../../../Components/Modal/ModalCard";

export default function Page({ params }) {
  console.log("===================");
  if (params.id.includes("%20")) {
    // console.log(params.id.split("%20"))
    var parametro = params.id.split("%20")[0] + " " + params.id.split("%20")[1];
  }
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState();
  const [totalProdutos, setTotalProdutos] = useState()
  const [pagina, setPagina] = useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  console.log(params.id);
  console.log(params.page);
  useEffect(() => {
    async function fetchCategoriasProdutos() {
      const resultado = await getCategoryProduct(params.id);
      console.log("resultado categoriareq", resultado);
      setProdutos(resultado.produtos);
      setPagina(resultado.page);
      setTotalPaginas(resultado.totalpaginas);
      setTotalProdutos(resultado.totalproduto)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      // setLoading(false)
    }

    fetchCategoriasProdutos();
  }, [params.id]);
  console.log(produtos);
  console.log(pagina);
  console.log(totalPaginas);

  function setPage(produto, pageNumber) {
    buscaProdutoPagina(produto, pageNumber).then((products) => {
      // Atualiza o estado dos produtos com os novos produtos
      setProdutos(products);
      console.log(
        "🚀 ➽ file: page.jsx:44  ➽ buscaProdutoPagina  ➽ products ⏩",
        products
      );
      console.log(
        "🚀 ➽ file: page.jsx:44  ➽ buscaProdutoPagina  ➽ products ⏩",
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
      <div className="bg-teste bg-cover bg-no-repeat bg-center min-h-[253px] h-full max-w-full w-[1519px] rounded-[15px] "></div>
      {/* <Image className='max-w-full w-[1519px] h-[253px]' src={banner2} alt=''/> */}
      {/* Header pagina */}
      <div className="flex justify-between sm:max-2xl:flex-row items-center sm:max-2xl:items-center text-cor-preto mt-[50px] mb:max-mn:flex-row mb:max-mn:items-start mb:max-mn:gap-3">
        <h3 className="mn:max-2xl:text-[24px] text-[24px] font-semibold leading-[normal] mb:max-mn:whitespace-nowrap">
          {params.id.includes("%20") ? parametro : params.id}
        </h3>
        <div
          className="flex items-center w-auto gap-[2.75rem] mb:max-mn:w-full sm:justify-between sm:w-auto mn:justify-end 
        mn:w-auto mb:justify-end mb:w-full"
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
            {totalProdutos ? `${totalProdutos} itens` : "0 itens"}
            </span>
          </p>
        </div>
      </div>

      {/* cards produtos */}
      <section className="mt-[30px]">
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
        {/* <div className="grid justify-center items-center 2xl:grid-cols-4 xl:grid-cols-4 gap-10 lg:grid-cols-4  lg:items-center md:grid-cols-3 mn:max-md:grid-cols-2 mb:max-mn:grid-cols-1"> */}
        {produtos ? (
          <div className="flex  3xl:gap-[97.3px] 2xl:gap-[76.3px] flex-wrap  items-center xl:gap-[50.3px] mb:max-3xl:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 lg:gap-[9.3px] md:gap-[9.3px] sm:gap-[25.3px] mn:gap-[25.3px] lg:items-center md:grid-cols-3 mn:max-md:grid-cols-2 mb:max-mn:grid-cols-1">
            {produtos.map((produto) => {
              return (
                <Cards
                  key={produto.ean}
                  ean={produto.ean}
                  // imagem={produto.image.replace("/", "")}
                  imagem={produto.image}
                  nome={produto.nomeproduto}
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a={produto.valor_pix}
                  valor={produto.valor}
                  parcelas="até 4x sem juros"
                  loading={loading}
                />
              );
            })}
            <ModalCard />
          </div>
        ) : (
          <div className="flex w-full flex-col justify-center items-center mb-[5%] mt-[5%] text-center px-2 mb:max-3xl:w-full mb:max-3xl:flex mb:max-3xl:flex-col mb:max-3xl:justify-center mb:max-3xl:items-center text-2xl font-bold">
            <h1>Lamentamos, nenhum produto encontrado nessa categoria.</h1>
            <p>Tente novamente em outro categoria...</p>
          </div>
        )}

        {/* <SkeletonCards/> */}

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
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00"
            parcelas="até 4x sem juros"
          /> */}

        <div className="flex justify-center pt-[80px] pb-[120px] items-center">
          {/* <Paginacao 
          />
          <Pagi totalPaginas={totalPaginas}/> */}
          <Pagination
            disableCursorAnimation
            showControls
            total={totalPaginas}
            initialPage={1}
            className="gap-2"
            radius="full"
            renderItem={renderItem}
            variant="light"
            onChange={(e) => setPage(params.id, e)}
          />
        </div>
      </section>
    </section>
  );
}
