"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import taca from "../../../../../public/images/assets/taca.svg";
import cart from "../../../../../public/images/assets/cart-btn.svg";
// import CardJuntos from "../../Components/CardsCompradosJuntos";
import mais from "../../../../../public/images/assets/+.svg";
import iconeDescricao from "../../../../../public/images/assets/descricao-icone.svg";
import iconeInfo from "../../../../../public/images/assets/info-icone.svg";
import add from "../../../../../public/images/assets/add+.svg";
import Cards from "../../../Components/CardsProdutos";
import CardCategorias from "../../../Components/cardCategorias";
import { getProduct } from "../../../api/apiEcommerce";
import { CarrinhoContext } from "../../../Components/context/CarrinhoContext";
import ModalCard from "../../../Components/Modal/ModalCard";

export default function Produto({ params }) {
  const {
    carrinhoLocalStorage,
    setCarrinhoLocalStorage,
    adicionarProdutoLocalStorage,
    adicionarProdutoApi,
    setCarrinhoApi,
  } = useContext(CarrinhoContext);
  // const { carrinhoCont, setCarrinhoCont, adicionarProduto,adicionarProdutoApi } =
  // useContext(CarrinhoContext);

  // function adicionarProduto(novoProduto) {
  //   const verificaProduto = carrinhoCont.some((ItemNoCarrinho) => {
  //     return ItemNoCarrinho.ean === novoProduto.ean;
  //   });

  //   console.log(verificaProduto)

  //   if(!verificaProduto) {
  //     novoProduto.quantidade = 1 ;
  //     return setCarrinhoCont((carrinhoAntigo) => [
  //       ...carrinhoAntigo,novoProduto,
  //     ])
  //   }

  //   setCarrinhoCont((carrinhoAntigo) => carrinhoAntigo.map((itemNoCarrinho) => {
  //     if(itemNoCarrinho.ean === novoProduto.ean) {
  //       itemNoCarrinho.quantidade += 1;
  //     }
  //     return itemNoCarrinho
  //   }))
  //   console.log(carrinho)

  // }
  const [loading, setLoading] = useState(true);
  const [produto, setProduto] = useState([]);
  const [produtoSemelhante, setProdutoSemelhante] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  const [variacao, setVariacao] = useState("Natural");

  function addQuantidade() {
    const add = quantidade + 1;
    setQuantidade(add);
    console.log(quantidade);
  }

  function removeQuantidade() {
    const remove = quantidade > 1 ? quantidade - 1 : 1;
    setQuantidade(remove);
  }

  console.log(params);
  useEffect(() => {
    async function fetchProduto() {
      const resultado = await getProduct(params.ean);
      // console.log(resultado);
      setProduto(resultado.produtoConsultado);
      setProdutoSemelhante(resultado.produtosSemelhantes);
      // setTimeout(() => {
        setLoading(false);
      // }, 2000);
    }

    fetchProduto();
  }, [params.ean]);

  console.log(produto);
  console.log(produtoSemelhante);

  return (
    <div className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5 px-0 mx-auto mt-14">
      {loading ? (
        <div className="bg-cinza-skeleton  animate-pulse  rounded-full h-9 3xl:!w-[50%] md:mx-0 lg:max-3xl:mx-0 mn:max-md:!w-[446px] md:max-3xl:!w-[40%] mb:!w-full text-xl mb-5 text-neutral-dark font-semibold text-left leading-[normal] mn:w-[446px] mn:mx-auto mn:text-3xl md:w-full lg:w-full lg:text-[28px]"></div>
      ) : (
        <h2 className="text-xl mb-5 text-neutral-dark font-semibold text-left leading-[normal] mn:w-[446px] mn:mx-auto mn:text-3xl md:w-full lg:w-full lg:text-[28px]">
          {produto.nomeproduto}
          {/* Whisky Johnnie Walker Green Label 750 ml */}
        </h2>
      )}
      <section className="flex flex-col w-full gap-5 mb-10 mn:w-[446px] mn:mx-auto sm:w-full md:flex-row md:w-full lg:flex-row lg:m-0 lg:w-full  lg:gap-10 lg:justify-between">
        {loading ? (
          <div className="3xl:!mx-auto 2xl:!w-[556px] xl:!w-[550px] animate-pulse mn:mx-auto lg:mx-0  mn:max-sm:!h-[446px] mn:max-lg:!w-[446px] lg:!w-[446px] mb:h-[400px] bg-cinza-skeleton flex items-center justify-center rounded-xl">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
              width={446}
              height={446}
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        ) : (
          <div className="mn:mx-auto lg:w-[40%] lg:mx-0">
            <Image
              className="mx-auto"
              src={produto.image}
              width={446}
              height={446}
              alt="imagem do produto"
            />
            {/* <Image src="/images/Produtos/image 26.png" width={446} height={446} /> */}
          </div>
        )}
        {/* <div className="mn:mx-auto lg:w-[40%] lg:mx-0">
          <Image
          className="mx-auto"
            src={produto.image?.replace("/", "")}
            width={446}
            height={446}
          />
          
        </div> */}

        <div className="flex flex-col gap-6 mn:mx-auto md:flex-row lg:flex-row lg:w-[50%] lg:mx-0 lg:pt-1">
          <div className="flex flex-col sm:mx-auto lg:w-[50%] lg:mx-0">
            {loading ? (
              <p className="text-cinza-claro animate-pulse h-9 !w-[20%] rounded-full text-base font-medium leading-[normal] line-through lg:text-xl bg-cinza-skeleton"></p>
            ) : (
              <p className="text-cinza-claro text-base font-medium leading-[normal] line-through lg:text-xl">
                R$ {produto.valor}
              </p>
            )}

            {loading ? (
              <p className="bg-cinza-skeleton animate-pulse h-9 w-[45%] rounded-full text-[32px] font-bold leading-[normal] mt-2 mb-[4.66px] lg:text-[40px]"></p>
            ) : (
              <p className="text-amarelo-medio text-[32px] font-bold leading-[normal] mt-2 mb-[4.66px] lg:text-[40px]">
                R$ {produto.valor_pix}{" "}
                <span className="text-sm font-semibold leading-[normal] lg:text-[17.455px]">
                  no pix
                </span>
              </p>
            )}
            <p className="text-cinza-medio text-base font-normal leading-[normal] lg:text-xl">
              até 4x sem juros
            </p>
            <p className="text-cinza text-sm font-normal leading-[140.4%] mt-[10.75px] mb-[20.37px] lg:text-base">
              em até 10X de{" "}
              <span className="text-cinza-escuro text-sm font-bold leading-[140.4%] lg:text-base">
                67,04
              </span>{" "}
              sem juros no cartão ou em 1x no cartão com até
              <span className="text-cinza-escuro text-sm font-bold leading-[140.4%] lg:text-base">
                10% OFF
              </span>
            </p>
            <p className="bg-amarelo-medio-f text-amarelo-mostarda w-fit inline-flex px-5 py-[10px] rounded-[20px] font-semibold leading-[normal] mb-[10px] md:text-sm">
              R$ 55,00 a partir de 6 un.
            </p>
            <p
              className="text-primaria font-semibold w-fit leading-[normal] bg-[rgba(255, 184, 0, 0.08)] border-solid border-[1px]
           border-[#FFE9D4] rounded-[20px] inline-flex p-[10px] justify-center items-center gap-[4px]"
            >
              <span>
                <Image src={taca} width={15.001} height={18} alt="taca" />
              </span>
              + 12 ml de chop
            </p>
          </div>

          <div className="flex w-full flex-col gap-5 md:w-446px lg:w-[50%] lg:pt-1">
            <div className="flex flex-col gap-5 items-center lg:order-2">
              <p className="text-cinza-medio font-medium leading-[normal]">
                Variação
              </p>
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

            {/* <div className="flex flex-col items-center gap-4 ">
            <p className="text-cinza-medio font-medium leading-[normal]">
              Selecione
            </p>
            <div className="flex gap-4">
              <button
                className="bg-[#EEE] inline-flex justify-center items-center w-[51px] h-[51px] rounded-[50%] border border-solid 
              border-cinza-medio-d  text-cor-preto text-sm leading-[normal] font-bold "
              >
                1L
              </button>

              <button
                className="bg-[#EEE] inline-flex justify-center items-center w-[51px] h-[51px] rounded-[50%] border border-solid 
              border-cinza-medio-d  text-cor-preto text-sm leading-[normal] font-bold "
              >
                2L
              </button>

              <button
                className="bg-[#EEE] inline-flex justify-center items-center w-[51px] h-[51px] rounded-[50%] border border-solid 
              border-cinza-medio-d  text-cor-preto text-sm leading-[normal] font-bold "
              >
                5L
              </button>

              <button
                className="bg-[#EEE] inline-flex justify-center items-center w-[51px] h-[51px] rounded-[50%] border border-solid 
              border-cinza-medio-d  text-cor-preto text-sm leading-[normal] font-bold "
              >
                10L
              </button>
            </div>
          </div> */}

            <div className="flex flex-col items-center gap-[10px] mn:w-full sm:mx-auto lg:w-full lg:order-3">
              <p className="text-cinza-medio font-medium leading-[normal]">
                Quant.
              </p>
              <div className="flex p-5 justify-between items-center rounded-[10px] border border-solid border-cinza-medio-c w-full">
                <button
                  className="text-2xl font-bold"
                  onClick={removeQuantidade}
                >
                  -
                </button>
                <p className="font-bold">{quantidade}</p>
                <button
                  className="text-amarelo-medio-m text-2xl font-bold"
                  onClick={addQuantidade}
                >
                  +
                </button>
              </div>
              <div className="flex justify-between w-full md:hidden lg:flex">
                <button
                  className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5"
                  value={6}
                  onClick={(e) =>
                    quantidade === 1
                      ? setQuantidade(Number(e.target.value) + quantidade - 1)
                      : setQuantidade(Number(e.target.value) + quantidade)
                  }
                >
                  + 6 un.
                </button>
                <button
                  className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5"
                  value={12}
                  onClick={(e) =>
                    quantidade === 1
                      ? setQuantidade(Number(e.target.value) + quantidade - 1)
                      : setQuantidade(Number(e.target.value) + quantidade)
                  }
                >
                  + 12 un.
                </button>
              </div>
            </div>

            <div className="flex justify-between sm:w-[80%] sm:mx-auto md:w-full lg:order-1 lg:w-[100%]">
              <button className="flex justify-center items-center gap-1 py-[17px] w-[70%] bg-amarelo-medio-m text-cor-preto text-[18px] font-bold leading-[normal] rounded-[100px]">
                <span>
                  <Image src={cart} width={24} height={24} alt="cart" />{" "}
                </span>
                Comprar
              </button>
              <button
                className="bg-amarelo-medio-m rounded-[50%] flex justify-center items-center w-[54px] h-[54px]"
                // onClick={() => adicionarProduto(produto,quantidade,variacao)}
                onClick={() => {
                  const token = localStorage.getItem("token");
                  console.log(token);
                  if (token) {
                    adicionarProdutoApi(produto, quantidade, variacao);
                  } else if (!token) {
                    console.log("slavar Local");
                    adicionarProdutoLocalStorage(produto, quantidade, variacao);
                  }
                }}
              >
                <Image src={cart} width={22} height={22} alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 mb-10 lg:flex-row lg:mt-20 lg:gap-12">
        {/* codigo desc
        <p
          dangerouslySetInnerHTML={{ __html: nome }}
          className="font-semibold text-[18px] leading-[140%] pb-[10px] lowercase"
        ></p> */}
        <div className="lg:w-[50%]">
          <h2 className="flex items-center gap-[10px] text-suport-dark text-xl font-semibold leading-[normal] lg:text-2xl">
            <span>
              <Image
                src={iconeDescricao}
                width={24}
                height={24}
                alt="iconeDescricao"
              />{" "}
            </span>
            Descrição do produto
          </h2>
          <div className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
            {loading ? (
              <div>
                <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
                <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
                <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
              </div>
            ) : produto.descricao ? (
              produto.descricao
            ) : (
              ""
            )}
            
          </div>
        </div>

        <div className="lg:w-[50%]">
          <h2 className="flex items-center gap-[10px] text-suport-dark text-xl font-semibold leading-[normal] lg:text-2xl">
            <span>
              <Image src={iconeInfo} width={24} height={24} alt="iconeinfo" />{" "}
            </span>
            Informações do Produto
          </h2>
          {loading ? (
            <div className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
              <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
              <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
              <p className="h-4 w-full bg-cinza-skeleton rounded-full mb-2 animate-pulse"></p>
            </div>
          ) : (
            <p className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
              Inquieto em misturar diferentes ingredientes botânicos para chegar
              na bebida perfeita, Charles Tanqueray criou o TANQUERAY LONDON DRY
              GIN em 1830. Parceiro perfeito para o bartender recriar receitas
              clássicas, entre elas o icônico drink gin tônica, uma das
              combinações mais famosas do mundo.
            </p>
          )}
          {/* <p className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
            Inquieto em misturar diferentes ingredientes botânicos para chegar
            na bebida perfeita, Charles Tanqueray criou o TANQUERAY LONDON DRY
            GIN em 1830. Parceiro perfeito para o bartender recriar receitas
            clássicas, entre elas o icônico drink gin tônica, uma das
            combinações mais famosas do mundo.
          </p> */}
        </div>
      </section>

      <section className="mb-5">
        <CardCategorias
          categoria={produto.nomecategoria}
          corPadrao="bg-branco"
        />
      </section>

      <section>
        <h4 className="text-suport-dark text-xl font-semibold leading-[normal] flex items-center gap-[10px] mb-5">
          <span>
            <Image
              className="!w-[24px] !h-[24px]"
              src={add}
              width={30}
              height={30}
              alt="Adicionar Produto ao Carrinho"
            />
          </span>
          Produtos Semelhantes
        </h4>
        <div className="flex flex-col gap-[10px] mb-20 mn:grid mn:grid-cols-2 lg:grid-cols-4 lg:gap-[4.55rem]">
          {produtoSemelhante.map((prod) => {
            return (
              <Cards
                key={prod.ean}
                ean={prod.ean}
                imagem={prod.image}
                nome={prod.nomeproduto}
                promoQtd="Compre 3 leve 1"
                // promoNovo="Novo"
                // promoValor="R$ 55,00 a partir de 6 un."
                a={prod.valor}
                valor={prod.valor_pix}
                parcelas="até 4x sem juros"
                loading={loading}
              />
            );
          })}

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
          /> */}
          <ModalCard />
        </div>
      </section>
    </div>
  );
}
