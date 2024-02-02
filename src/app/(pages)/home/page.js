"use client"


import Cards from "../../Components/CardsProdutos";


import CarrosselProdutos from "../../Components/CarrosselProdutos";
import Image from "next/image";
import vetor from "../../../../public/images/assets/vetorIce.svg";
import qrcode from "../../../../public/images/Qrcode.svg";
import CarrosselKitsChurrasco from "../../Components/CarrosselKitsChurrasco";
import CarrosselKitsBebidas from "../../Components/CarrosselKitsBebidas";
import CardCategorias from "../../Components/cardCategorias";
import CategoriasHome from "../../Components/CardCategoriasHome";
import ModalCard from "../../Components/Modal/ModalCard";

export default function HomePage() {
  return (
    <main className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5 ">
      {/* section categorias */}
      <section className="max-w-[1516px] mx-auto mt-10 mb-[60px] flex flex-col justify-center items-center">
        <Image
          className="lg:w-[110.802px] lg:h-[56.091px]"
          src={vetor}
          width={77.221}
          height={39.091}
          alt="Logo da Iceberg"
        />
        <h2 className="mt-[10.91px] text-lg font-semibold leading-[normal] lg:text-2xl lg:leading-[normal]">
          Categorias
        </h2>
        <div className="mt-[10px] w-full px-5">
          <p className="text-cinza-claro-d text-sm font-medium leading-[normal] text-center lg:text-base">
            Escolha por categorias
          </p>
          <div className="w-full pt-10 flex items-center overflow-x-auto gap-[27px] box-border mn:justify-between md:justify-center">
            <div className="flex flex-col items-center gap-[10.32px]">
              <div className="bg-primaria rounded-[100px] w-[60px] h-[60px] flex items-end justify-center overflow-hidden lg:w-[90px] lg:h-[90px]">
                <Image
                  className="lg:w-[70px] lg:h-[70px] object-cover"
                  src="/images/HomecatVinho.png"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
              <p className="text-sm font-medium leading-[normal] whitespace-nowrap lg:text-lg">
                Vinhos
              </p>
            </div>

            <div className="flex flex-col items-center gap-[10.32px]">
              <div className="bg-primaria rounded-[100px] w-[60px] h-[60px] flex items-end justify-center overflow-hidden lg:w-[90px] lg:h-[90px]">
                <Image
                  className="lg:w-[70px] lg:h-[70px] object-cover"
                  src="/images/HomecatCerveja.png"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
              <p className="text-sm font-medium leading-[normal] whitespace-nowrap lg:text-lg">
                Cervejas
              </p>
            </div>

            <div className="flex flex-col items-center gap-[10.32px]">
              <div className="bg-primaria rounded-[100px] w-[60px] h-[60px] flex items-end justify-center overflow-hidden lg:w-[90px] lg:h-[90px]">
                <Image
                  className="lg:w-[70px] lg:h-[70px] object-cover"
                  src="/images/HomecatChurrasco.png"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
              <p className="text-sm font-medium leading-[normal] whitespace-nowrap lg:text-lg">
                Churrasco
              </p>
            </div>

            <div className="flex flex-col items-center gap-[10.32px]">
              <div className="bg-primaria rounded-[100px] w-[60px] h-[60px] flex items-end justify-center overflow-hidden lg:w-[90px] lg:h-[90px]">
                <Image
                  className="lg:w-[70px] lg:h-[70px] object-cover"
                  src="/images/HomecatConveniencia.png"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
              <p className="text-sm font-medium leading-[normal] whitespace-nowrap lg:text-lg">
                Conveniência
              </p>
            </div>

            <div className="flex flex-col items-center gap-[10.32px]">
              <div className="bg-primaria rounded-[100px] w-[60px] h-[60px] flex items-end justify-center overflow-hidden lg:w-[90px] lg:h-[90px]">
                <Image
                  className="lg:w-[70px] lg:h-[70px] object-cover"
                  src="/images/HomecatBeats.png"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
              <p className="text-sm font-medium leading-[normal] whitespace-nowrap lg:text-lg">
                Beats e Ice
              </p>
            </div>
          </div>
        </div>
        <CarrosselProdutos />
      </section>
      {/* section Banner propaganda */}
      <section className="max-w-[1416px] mx-auto mt-10 px-5 flex flex-col gap-[20.25px] w-full lg:mt-16 lg:flex-row lg:justify-between lg:gap-0">
        <Image
          className="!w-full !max-h-[238px] !h-full rounded-[4.453px] lg:!w-[49%] lg:!max-h-[238px] lg:!h-full"
          src="/images/BannerHomeCard1.png"
          width={749.5}
          height={238}
          alt=""
        />
        <Image
          className="!w-full !max-h-[238px] !h-full rounded-[4.453px] lg:!w-[49%] lg:!max-h-[238px] lg:!h-full"
          src="/images/BannerHomeCard2.png"
          width={749.5}
          height={238}
          alt=""
        />
      </section>
      {/* section Kits */}
      <section className="mt-10 mb-[60px] flex flex-col justify-center items-center lg:mt-20">
        <Image
          className="lg:w-[110.802px] lg:h-[56.091px]"
          src={vetor}
          width={77.221}
          height={39.091}
          alt="Logo da Iceberg"
        />
        <h2 className="mt-[10.91px] text-lg font-semibold leading-[normal] lg:text-2xl">
          Kits
        </h2>
        <div className="mt-[10px] w-full px-5">
          <p className="text-cinza-claro-d text-sm font-medium leading-[normal] text-center lg:text-base">
            Alugue o que você precisa para fazer seu churrasco
          </p>
        </div>
        <CarrosselKitsBebidas />
      </section>
      {/* section Churrasco */}
      <section className="mt-10 mb-[60px] flex flex-col justify-center items-center lg:mt-20">
        <Image
          className="lg:w-[110.802px] lg:h-[56.091px]"
          src={vetor}
          width={77.221}
          height={39.091}
          alt="Logo da Iceberg"
        />
        <h2 className="mt-[10.91px] text-lg font-semibold leading-[normal] lg:text-2xl">
          Itens do seu Churrasco
        </h2>
        <div className="mt-[10px] w-full px-5">
          <p className="text-cinza-claro-d text-sm font-medium leading-[normal] text-center lg:text-base">
            Alugue o que você precisa para fazer seu churrasco
          </p>
        </div>
        <CarrosselKitsChurrasco />
      </section>

      {/* Cards */}
      {/* max-w-[1416px] mx-auto px-5 my-20 grid grid-cols-1 gap-[10px] lg:grid-cols-3 */}
      <section className="max-w-[1416px] mx-auto px-5 my-20 flex flex-col gap-[10px] lg:flex-row">
        <div className="flex flex-col gap-[10px] lg:w-[40%]">
          <div className="bg-cor-preto text-branco p-5 rounded-[18px] h-[253px] xl:py-[45px] xl:px-10">
            <div className="mn:flex mn:justify-between mn:items-center">
              <p className="text-xl font-semibold leading-[normal] lg:text-4xl">
                Programa Fidelidade
              </p>
              <p
                className="bg-branco hidden py-[3.871px] px-[4.355px] items-center gap-[1.935px] rounded-[48.387px] text-cor-preto text-[11.613px] font-semibold leading-[normal]
            "
              >
                <span className="text-[5.806px] font-normal ">até</span> 20%{" "}
                <span className="text-[8.71px] font-bold">OFF</span>
              </p>
            </div>
            <p className="mt-[22px] mb-[22px] w-[90%] text-justify text-sm lg:mt-2 lg:mb-5 ">
              Ganhe até 20% de bônus na próxima compra no site, APP ou lojas
              físicas
            </p>
            <button className="bg-amarelo-claro text-sm font-semibold leading-[normal] rounded-[40px] py-2 px-4 text-cor-preto xl:py-[14px] xl:px-5 xl:text-lg">
              Confira agora
            </button>
          </div>

          <div className="bg-amarelo-claro text-cor-preto p-5 rounded-[18px] h-[253px] xl:py-[45px] xl:px-10 xl:flex xl:justify-between">
            <div className="xl:w-[60%]">
              <p className="text-xl font-semibold leading-[normal] lg:text-2xl">
                Não quer perder as melhores oferdas da ...?
              </p>
              <p className="text-sm font-medium leading-[normal] my-5 w-[90%] text-justify">
                Ganhe até 20% de bônus na próxima compra no site, APP ou lojas
                físicas
              </p>
            </div>

            <Image className="xl:w-[95px] xl:h-[96px] xl:pt-[10px]" src={qrcode} width={55.082} height={56} />
          </div>
        </div>

        <div className="h-[253px] lg:w-[30%] lg:h-auto">
        <CardCategorias
          categoria="Vodka"
          cor="#FBC901"
          corPadrao="bg-[rgba(0,_0,_0,_0.78)] group-hover:bg-[#080B12]"
          home={true}
        />

        </div>

        <div className="flex flex-col gap-[10px] lg:w-[30%]">
          <CardCategorias
            categoria="Whisky"
            cor="#FBC901"
            corPadrao="bg-[rgba(0,_0,_0,_0.78)] group-hover:bg-[#080B12]"
          />

          <CardCategorias
            categoria="Gin"
            cor="#FBC901"
            corPadrao="bg-[rgba(0,_0,_0,_0.78)] group-hover:bg-[#080B12]"
          />
        </div>
        <ModalCard/>
      </section>
    </main>
  );
}
