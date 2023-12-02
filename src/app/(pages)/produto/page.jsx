import Image from "next/image";
import React from "react";
import taca from "../../../../public/images/assets/taca.svg";
import cart from "../../../../public/images/assets/cart-btn.svg";
import CardJuntos from "../../Components/CardsCompradosJuntos";
import mais from "../../../../public/images/assets/+.svg";
import iconeDescricao from "../../../../public/images/assets/descricao-icone.svg";
import iconeInfo from "../../../../public/images/assets/info-icone.svg";
import add from "../../../../public/images/assets/add+.svg";
import Cards from "../../Components/CardsProdutos";

const Produto = () => {
  return (
    <div className="px-[16.688rem] pt-[48px]">
      <section className="mb-10">
        <h2 className="pb-[20px] text-neutral-dark text-[28px] font-semibold leading-[normal]">
          Whisky Johnnie Walker Green Label 750 ml
        </h2>
        <div className="flex gap-[244px] items-start">
          <div>
            <div className="flex gap-[2.75rem]">
              <ul className="flex flex-col gap-[1.563rem] ">
                <li className="w-full">
                  <Image
                    src="/images/Produtos/image 26.png"
                    width={83}
                    height={83}
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    src="/images/Produtos/image 73.png"
                    width={83}
                    height={83}
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    src="/images/Produtos/image 73.png"
                    width={83}
                    height={83}
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    src="/images/Produtos/image 73.png"
                    width={83}
                    height={83}
                    alt=""
                  />
                </li>
              </ul>
              <Image
                src="/images/Produtos/image 26.png"
                width={446}
                height={446}
                alt=""
              />
            </div>
          </div>
          <div className="flex pt-1">
            <div>
              <p className="text-cinza-claro text-[20px] font-medium leading-[normal] line-through">
                R$ 50,00
              </p>
              <p className="text-amarelo-medio text-[40px] font-bold leading-[normal] pt-[8px] pb-1">
                R$ 50,00{" "}
                <span className="text-[17.455px] font-semibold leading-[normal]">
                  no pix
                </span>
              </p>
              <p className="text-cinza-medio text-[20px] font-normal leading-[normal]">
                até 4x sem juros
              </p>
              <p className="text-cinza text-[16px] font-normal leading-[140.4%] w-[397px] pt-4 pb-5 pr-[5.75rem]">
                em até 10X de{" "}
                <span className="text-cinza-escuro text-[16px] font-bold leading-[140.4%]">
                  67,04
                </span>{" "}
                sem juros no cartão ou em 1x no cartão com até
                <span className="text-cinza-escuro text-[16px] font-bold leading-[140.4%]">
                  {" "}
                  10% OFF
                </span>
              </p>
              <p className="bg-amarelo-medio-f text-amarelo-mostarda w-[19.125rem] h-[2.438rem] mb-[10px] flex items-center justify-center rounded-[20px] font-semibold leading-[normal]">
                R$ 55,00 a partir de 6 un.
              </p>
              <p className="text-primaria font-semibold leading-[normal] bg-[rgba(255, 184, 0, 0.08)] border-solid border-[1px] border-[#FFE9D4] rounded-[20px] inline-flex p-[10px] justify-center items-center gap-[4px]">
                <span>
                  <Image src={taca} width={15.001} height={18} />
                </span>{" "}
                + 12 ml de chop
              </p>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-5">
                  <button className="flex justify-center items-center gap-1 bg-amarelo-medio-m text-cor-preto text-[18px] font-bold leading-[normal] w-[13.75rem] h-[3.313rem] rounded-[100px]">
                    <span>
                      <Image src={cart} width={24} height={24} />
                    </span>
                    Comprar
                  </button>
                  <button className="bg-amarelo-medio-m rounded-[50%] w-[3.375rem] h-[3.375rem] flex justify-center items-center">
                    <Image src={cart} width={22} height={22} />
                  </button>
                </div>
                <p className="text-cinza-medio font-medium leading-[normal] pt-6 pb-[21px]">
                  Variação
                </p>
                <div className="flex gap-[10px]">
                  <button className="text-branco bg-cor-preto font-medium leading-[normal] inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-cor-preto">
                    Natural
                  </button>
                  <button className="text-cinza-medio-f bg-branco-medio leading-[normal] inline-flex py-[10px] px-5 justify-center items-center rounded-[20px] border-solid border border-branco-medio-m">
                    Gelada
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-cinza-medio font-medium leading-[normal] pt-[27px] pb-[10px]">
                  Quant.
                </p>
                <div className="flex flex-wrap justify-center">
                  <input
                    className="max-w-[294px] w-full h-[60px] rounded-[10px] border border-solid border-cinza-medio-c mb-[10px]"
                    type="number"
                    name=""
                    id=""
                  />
                  <button className="max-w-[142px] w-full h-[60px] mr-[5px] rounded-[10px] border border-solid border-cinza-medio-c">
                    + 6 un.
                  </button>
                  <button className="max-w-[142px] w-full h-[60px] ml-[5px] rounded-[10px] border border-solid border-cinza-medio-c">
                    + 12 un.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Combo */}
      <section>
        <span className="w-full h-[1px] bg-branco-claro block"></span>
        <h3 className="text-suport-dark text-2xl font-semibold leading-[normal] my-5">
          Frequentemente comprados juntos
        </h3>
        <div className="flex items-center gap-[210px]">
          <div className="flex items-center gap-11">
            <CardJuntos imagem="/images/Produtos/image 73.png" />
            <div>
              <Image src={mais} width={24} height={24} />
            </div>
            <CardJuntos imagem="/images/Produtos/image 53.png" />
            <div>
              <Image src={mais} width={24} height={24} />
            </div>
            <CardJuntos imagem="/images/Produtos/image 52.png" />
          </div>
          <div className="text-center">
            <p className="text-suport-dark font-medium leading-[normal]">
              Preço total:{" "}
              <span className="text-2xl font-semibold leading-[normal]">
                R$ 229,70
              </span>
            </p>
            <button className="mt-5 max-w-[284px] w-full h-[53px] bg-amarelo-medio-m rounded-[100px] px-[29px] py-[17px] text-cor-preto font-medium leading-[normal] ">
              Adicionar todos os 3 ao carrinho
            </button>
          </div>
        </div>
        <span className="w-full h-[1px] bg-branco-claro block mt-[41px] mb-10"></span>
      </section>
      {/* container Descrição */}
      <section className="flex gap-12">
        <div>
          <h2 className="flex items-center gap-[10px] text-suport-dark text-2xl font-semibold leading-[normal]">
            <span>
              <Image src={iconeDescricao} width={24} height={24} />
            </span>
            Descrição do produto
          </h2>
          <p className="text-cor-preto-m leading-[140.4%] mt-5 max-w-[673px] w-full text-left">
            Apresentando PRO X SUPERLIGHT - nosso mouse PRO mais leve e rápido
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
            e avanços mais recentes.
          </p>
        </div>
        <div>
          <h2 className="flex items-center gap-[10px] text-suport-dark text-2xl font-semibold leading-[normal]">
            <span>
              <Image src={iconeInfo} width={24} height={24} />
            </span>
            Informações do Produto
          </h2>
          <p className="text-cor-preto-m leading-[140.4%] mt-5 max-w-[795px] w-full ">
            Inquieto em misturar diferentes ingredientes botânicos para chegar
            na bebida perfeita, Charles Tanqueray criou o TANQUERAY LONDON DRY
            GIN em 1830. Parceiro perfeito para o bartender recriar receitas
            clássicas, entre elas o icônico drink gin tônica, uma das
            combinações mais famosas do mundo.
          </p>
        </div>
      </section>
      <section className="mt-5">
        <h4 className="text-suport-dark text-2xl font-semibold leading-[normal] flex items-center gap-[10] mb-10">
          <span><Image src={add} width={30} height={30} /></span>Produtos Semelhantes
        </h4>
        <div className="flex gap-[110px] items-center">
        <Cards
            imagem={"/images/Produtos/image 42.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00 no pix"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 43.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00 no pix"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 44.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00 no pix"
            parcelas="até 4x sem juros"
          />
          <Cards
            imagem={"/images/Produtos/image 45.png"}
            nome="Whisky Johnnie Walker Green Label 750 ml"
            promoQtd="Compre 3 leve 1"
            // promoNovo="Novo"
            // promoValor="R$ 55,00 a partir de 6 un."
            a="R$ 50,00"
            valor="R$ 50,00 no pix"
            parcelas="até 4x sem juros"
          />
        </div>
      </section>
    </div>
  );
};

export default Produto;
