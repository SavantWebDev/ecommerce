"use client";
import Image from "next/image";
import imageBanner from "public/images/image72.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useEffect, useState } from "react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "./textCarousel.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import { TextBannerHome } from "../../../api/apiEcommerce";

export default function TextCarousel() {
  const [banners, setBanners] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const onAutoplayTimeLeft = (swiper, time) => {
    const elapsedTime = totalTime - time;
    const progress = (elapsedTime / totalTime) * 100;
    setProgress(progress);
  };
  useEffect(() => {
    async function fetchBanner() {
      const resultado = await TextBannerHome();
      console.log(resultado.result);
      setBanners(resultado.result);
    }

    fetchBanner();
  }, []);

  return (
    <>
      <div className="">
        <Swiper
          className="textSwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="flex flex-row-reverse justify-center items-start w-full mx-auto py-10 gap-[100px] max-lg:flex-col max-lg:text-center max-lg:justify-center max-lg:gap-[20px]  ">
                <article
                  className="max-w-[813px] w-full rounded-[40px]  h-[337px] bg-center bg-cover bg-no-repeat object-cover max-lg:rounded-[20px] "
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  {/* <Image
                    className="w-full h-full object-cover rounded-[40px]"
                    width={335}
                    height={138.448}
                    alt="banner image"
                    src={item.image.replace("/", "")}
                  /> */}
                </article>
                <article className=" flex flex-col gap-10 h-auto max-lg:items-center max-lg:px-3 ">
                  <h1 className="text-4xl font-semibold leading-[140%] ">
                    {item.titulo.replace("$1", "?")}
                  </h1>
                  <p className="text-cinza-light leading-[140%] text-base max-w-[597px] ">
                    {item.descricao}
                  </p>
                  <button className="max-w-[30%] flex items-center justify-between text-sm p-[14px_16px] bg-primaria rounded-[20px] text-[#414141]">
                    {item.botao}
                    <IoArrowForwardOutline size={24} className="text-[#000]" />
                  </button>
                </article>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
