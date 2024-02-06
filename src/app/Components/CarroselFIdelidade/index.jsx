"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardFidelidade from "../CardFidelidade";
import "./CarrosselFidelidade.css";

const CarrosselFidelidade = () => {
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

  return (
    <div className="xl:max-w-[1416px] 3xl:max-w-[1516px] pl-[2.25rem] pr-[2.25rem] w-full mx-auto">
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
            1920: {
              slidesPerView: 4,
              spaceBetween: 82,
            },
          }}
          keyboard
          spaceBetween={20}
        >
          {/* {produtos.map((item) => (
            // console.log(item.created_data)
            <SwiperSlide key={item.ean}>
              <Cards
                ean={item.ean}
                imagem={item.image.replace("/", "")}
                nome={item.nomeproduto}
                // promoQtd="Compre 3 leve 1"
                // promoNovo="Novo"
                promoValor="R$ 55,00 a partir de 6 un."
                a={item.valor_pix}
                valor={item.valor}
                parcelas="até 4x sem juros"
                loading={loading}
                dataNovo={item.created_data}
              />
            </SwiperSlide>
          ))} */}
          {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <CardFidelidade
                  imagem={item.image}
                  nome="Whisky Johnnie Walker Green Label 750 ml"
                  promoQtd="50% Off"
                  // promoNovo="50% Off"
                  promoValor="May 01, 2024 00:00:00"
                  // a="R$ 50,00"
                  pontos="2000 pontos"
                  // parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarrosselFidelidade;
