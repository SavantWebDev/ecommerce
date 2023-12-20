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

export default function Produto({ params }) {
  const { carrinhoCont, setCarrinhoCont, adicionarProduto } =
    useContext(CarrinhoContext);

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

  const [produto, setProduto] = useState([]);
  const [produtoSemelhante, setProdutoSemelhante] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  const [variacao, setVariacao] = useState();

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
    }

    fetchProduto();
  }, []);

  console.log(produto);
  console.log(produtoSemelhante);

  return (
    <div className="max-w-[1416px] w-full px-5 mx-auto">
      <h2 className="text-xl mb-5 text-neutral-dark font-semibold text-left leading-[normal] mn:w-[446px] mn:mx-auto mn:text-3xl md:w-full lg:w-full lg:text-[28px]">
        {produto.nomeproduto}
        {/* Whisky Johnnie Walker Green Label 750 ml */}
      </h2>
      <section className="flex flex-col w-full gap-5 mb-10 mn:w-[446px] mn:mx-auto md:flex-row md:w-full lg:flex-row lg:m-0 lg:w-full lg:justify-normal lg:gap-10 lg:justify-between">
        <div className="mn:mx-auto lg:w-[40%] lg:mx-0">
          <Image
            src={produto.image?.replace("/", "")}
            width={446}
            height={446}
          />
          {/* <Image src="/images/Produtos/image 26.png" width={446} height={446} /> */}
        </div>

        <div className="flex flex-col gap-6 mn:mx-auto md:flex-row lg:flex-row lg:w-[50%] lg:mx-0 lg:pt-1">
          <div className="flex flex-col sm:mx-auto lg:w-[50%] lg:mx-0">
            <p className="text-cinza-claro text-base font-medium leading-[normal] line-through lg:text-xl">
              R$ 50,00
            </p>
            <p className="text-amarelo-medio text-[32px] font-bold leading-[normal] mt-2 mb-[4.66px] lg:text-[40px]">
              {produto.valor} R$ 50,00{" "}
              <span className="text-sm font-semibold leading-[normal] lg:text-[17.455px]">
                no pix
              </span>
            </p>
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
            <p className="bg-amarelo-medio-f text-amarelo-mostarda w-fit inline-flex px-5 py-[10px] rounded-[20px] font-semibold leading-[normal] mb-[10px]">
              R$ 55,00 a partir de 6 un.
            </p>
            <p
              className="text-primaria font-semibold w-fit leading-[normal] bg-[rgba(255, 184, 0, 0.08)] border-solid border-[1px]
           border-[#FFE9D4] rounded-[20px] inline-flex p-[10px] justify-center items-center gap-[4px]"
            >
              <span>
                <Image src={taca} width={15.001} height={18} />
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
                  className="text-branco bg-cor-preto font-medium leading-[normal]
               inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-cor-preto"
                >
                  Natural
                </button>
                <button className="text-cinza-medio-f bg-branco-medio leading-[normal] inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-branco-medio-m">
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
                <button className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5">
                  + 6 un.
                </button>
                <button className="rounded-[10px] border border-solid border-cinza-medio-c w-[45%] py-5">
                  + 12 un.
                </button>
              </div>
            </div>

            <div className="flex justify-between sm:w-[80%] sm:mx-auto md:w-full lg:order-1 lg:w-[100%]">
              <button className="flex justify-center items-center gap-1 py-[17px] w-[70%] bg-amarelo-medio-m text-cor-preto text-[18px] font-bold leading-[normal] rounded-[100px]">
                <span>
                  <Image src={cart} width={24} height={24} />{" "}
                </span>
                Comprar
              </button>
              <button
                className="bg-amarelo-medio-m rounded-[50%] flex justify-center items-center w-[54px] h-[54px]"
                onClick={() => adicionarProduto(produto)}
              >
                <Image src={cart} width={22} height={22} />
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
              <Image src={iconeDescricao} width={24} height={24} />{" "}
            </span>
            Descrição do produto
          </h2>
          <p className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
            {produto.descricao ? produto.descricao : ""}
            {/* Apresentando PRO X SUPERLIGHT - nosso mouse PRO mais leve e rápido
            de todos os tempos. Com tecnologia LIGHTSPEED, foi desenvolvido para
            ajudá-lo a remover todos os obstáculos, para que você possa se
            concentrar exclusivamente em vencer.
            <br />
            <br /> Obtenha controle incrivelmente preciso, rápido e consistente
            com o Sensor HERO 25K. Chegue primeiro e mais rápido com pés de PTFE
            sem aditivos que proporcionam um deslizamento dramaticamente mais
            suave. O PRO X SUPERLIGHT pesa menos de 63 g sem a necessidade de
            furos.
            <br />
            <br /> Desenvolvido em colaboração com o mais alto nível de
            profissionais de e-sports do mundo, o PRO X SUPERLIGHT apresenta um
            design hiperminimalista, mesmo possuindo todas as nossas tecnologias
            e avanços mais recentes. */}
          </p>
        </div>

        <div className="lg:w-[50%]">
          <h2 className="flex items-center gap-[10px] text-suport-dark text-xl font-semibold leading-[normal] lg:text-2xl">
            <span>
              <Image src={iconeInfo} width={24} height={24} />{" "}
            </span>
            Informações do Produto
          </h2>
          <p className="text-cor-preto-m leading-[140.4%] mt-5 text-left">
            Inquieto em misturar diferentes ingredientes botânicos para chegar
            na bebida perfeita, Charles Tanqueray criou o TANQUERAY LONDON DRY
            GIN em 1830. Parceiro perfeito para o bartender recriar receitas
            clássicas, entre elas o icônico drink gin tônica, uma das
            combinações mais famosas do mundo.
          </p>
        </div>
      </section>

      <section className="mb-5">
        <CardCategorias categoria="Whisky" corPadrao="bg-branco" />
      </section>

      <section>
        <h4 className="text-suport-dark text-xl font-semibold leading-[normal] flex items-center gap-[10px] mb-5">
          <span>
            <Image
              className="!w-[24px] !h-[24px]"
              src={add}
              width={30}
              height={30}
            />
          </span>
          Produtos Semelhantes
        </h4>
        <div className="flex flex-col gap-[10px] mb-20 mn:grid mn:grid-cols-2 lg:grid-cols-4 lg:gap-[4.55rem]">
          {produtoSemelhante.map((prod) => {
            return (
              <Cards
                ean={prod.ean}
                imagem={prod.image.replace("/", "")}
                nome={prod.ean}
                promoQtd="Compre 3 leve 1"
                // promoNovo="Novo"
                // promoValor="R$ 55,00 a partir de 6 un."
                a="R$ 50,00"
                valor={prod.valor}
                parcelas="até 4x sem juros"
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
        </div>
      </section>
    </div>
  );
}
