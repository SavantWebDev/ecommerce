"use client";
import "./CarrosselProdutos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Cards from "../CardsProdutos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { getProductHome, getProductHomeSecond } from "../../api/apiEcommerce";

export default function CarrosselProdutos() {
  const cards = [
    { id: "1", image: "/images/Produtos/image 73.png" },
    { id: "2", image: "/images/Produtos/image 73.png" },
    { id: "3", image: "/images/Produtos/image 27.png" },
    { id: "4", image: "/images/Produtos/image 28.png" },
    { id: "5", image: "/images/Produtos/image 42.png" },
    { id: "6", image: "/images/Produtos/image 43.png" },
    { id: "7", image: "/images/Produtos/image 44.png" },
    { id: "8", image: "/images/Produtos/image 45.png" },
  ];

  const [produtos, setProdutos] = useState([]);
  const [produtosSecond, setProdutosSecond] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const resultado = await getProductHome();
      // console.log(resultado);
      setProdutos(resultado);
    }

    async function fetchProdutosSecond() {
      const resultado = await getProductHomeSecond();
      // console.log(resultado);
      setProdutosSecond(resultado);
    }

    fetchProdutos();
    fetchProdutosSecond();
  }, []);

  console.log(produtos);
  console.log(produtos[0])
  console.log(produtosSecond);


  return (
    <section className="mt-[30px] max-w-[1416px] w-full h-full mx-auto pl-5 pr-5 lg:mt-10">
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
      <div className="w-full">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1586: {
                slidesPerView: 4,
                spaceBetween: 75,
              },
            }}
            keyboard
            spaceBetween={20}
          >
            {produtos.map((item) =>
            // console.log(item.image.replace('/',''))
            (
              <SwiperSlide key={item.ean}>
                <Cards
                  ean={item.ean}
                  imagem={item.image.replace('/','')}
                  nome={item.nomeproduto}
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a="R$ 50,00"
                  valor={item.valor}
                  parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))}
            {/* {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <Cards
                  imagem={item.image}
                  nome="Whisky Johnnie Walker Green Label 750 ml"
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a="R$ 50,00"
                  valor="R$ 50,00"
                  parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
        <div className="relative w-full mt-10">
          <Swiper
            //breaks por resolucao no slidesPerView
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1586: {
                slidesPerView: 4,
                spaceBetween: 75,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 75,
              },
            }}
            keyboard
            spaceBetween={20}
          >
            {produtosSecond.map((item) => (
              <SwiperSlide key={item.ean}>
                <Cards
                  ean={item.ean}
                  imagem={item.image}
                  nome={item.nomeproduto}
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a="R$ 50,00"
                  valor={item.valor}
                  parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))}
            {/* {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <Cards
                  imagem={item.image}
                  nome="Whisky Johnnie Walker Green Label 750 ml"
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a="R$ 50,00"
                  valor="R$ 50,00"
                  parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))}           */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
