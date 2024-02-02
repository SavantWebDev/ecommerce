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
import {
  getProductHome,
  getProductHomeSecond,
  getProductHomeTeste,
} from "../../api/apiEcommerce";

export default function CarrosselProdutos() {
  const [loading, setLoading] = useState(true);
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
  const [filtro, setFiltro] = useState();

  function filtraItem(e) {
    setFiltro(e);
  }

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

    // Promise.all([fetchProdutos(), fetchProdutosSecond()]).then(() => {
    //   setLoading(false);
    // });

    Promise.all([fetchProdutos(), fetchProdutosSecond()]).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });

    fetchProdutos();
    fetchProdutosSecond();
  }, []);

  console.log(produtos);
  console.log(produtos[0]);
  console.log(produtosSecond);

  const skeletonCard = Array(4).fill(
    <div className="flex flex-col py-[1rem] max-w-[306px] 3xl:w-[306px] mx-auto w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
      <div className=" w-full relative h-[255px] rounded-[10px] bg-cinza-skeleton flex justify-center items-center">
        <div className="w-full max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px] bg-gray-300 animate-pulse">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="text-center mt-[20px] px-1 w-full 3xl:!w-[306px] 2xl:w-[278px] xl:">
        <div className="inline-flex h-4 w-full bg-cinza-skeleton rounded-full pb-[10px] animate-pulse"></div>
        <div className="inline-flex h-4 w-full bg-cinza-skeleton rounded-full animate-pulse"></div>
        <div className="inline-flex h-4 w-full bg-cinza-skeleton rounded-full pb-[2px] animate-pulse"></div>
        <div className="inline-flex h-4 w-full bg-cinza-skeleton rounded-full mb-3 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <section className="mt-[30px] max-w-[1416px] w-full h-full mx-auto pl-5 pr-5 lg:mt-10">
      <div className="flex overflow-x-auto w-full gap-[1.25rem] mb-[80px]  mn:overflow-x-auto  mn:w-auto">
        <button
          className={`text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px] ${
            filtro == "Recomendados"
              ? "bg-primaria text-cor-preto"
              : "border border-solid border-cinza-medio-g"
          }`}
          onClick={(e) => {
            filtraItem(e.target.innerHTML);
          }}
        >
          Recomendados
        </button>
        <button
          className={`text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px]   rounded-[40px] ${
            filtro == "Entrega grátis"
              ? "bg-primaria text-cor-preto"
              : "border border-solid border-cinza-medio-g"
          }`}
          onClick={(e) => {
            filtraItem(e.target.innerHTML);
          }}
        >
          Entrega grátis
        </button>
        <button
          className={`text-cinza whitespace-nowrap px-[1.25rem] py-[0.625rem] font-semibold leading-[22px]  rounded-[40px] ${
            filtro == "Mais Vendidos"
              ? "bg-primaria text-cor-preto"
              : "border border-solid border-cinza-medio-g"
          }`}
          onClick={(e) => {
            filtraItem(e.target.innerHTML);
            // getProductHomeTeste();
            getProductHomeTeste().then((products) => {
              setProdutos(products);
            });
          }}
        >
          Mais Vendidos
        </button>
        <button
          className={`text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px]  rounded-[40px] ${
            filtro == "Promoções"
              ? "bg-primaria text-cor-preto"
              : "border border-solid border-cinza-medio-g"
          }`}
          onClick={(e) => {
            filtraItem(e.target.innerHTML);
          }}
        >
          Promoções
        </button>
      </div>
      {loading ? (
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
                1920: {
                  slidesPerView: 4,
                  spaceBetween: 68,
                },
              }}
              keyboard
              spaceBetween={20}
            >
              {skeletonCard.map((card, i) => (
                // console.log(item.created_data)
                <SwiperSlide key={i}>{card}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="relative w-full mt-10">
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
                  spaceBetween: 68,
                },
              }}
              keyboard
              spaceBetween={20}
            >
              {skeletonCard.map((card, i) => (
                // console.log(item.created_data)
                <SwiperSlide key={i}>{card}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
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
                1920: {
                  slidesPerView: 4,
                  spaceBetween: 68,
                },
              }}
              keyboard
              spaceBetween={20}
            >
              {produtos.map((item) => (
                // console.log(item.created_data)
                <SwiperSlide key={item.ean}>
                  <Cards
                    ean={item.ean}
                    imagem={item.image.replace("\\", "")}
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
                  spaceBetween: 68,
                },
              }}
              keyboard
              spaceBetween={20}
            >
              {produtosSecond.map((item) => (
                <SwiperSlide key={item.ean}>
                  <Cards
                    ean={item.ean}
                    imagem={item.image.replace("\\", "")}
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
      )}
    </section>
  );
}
