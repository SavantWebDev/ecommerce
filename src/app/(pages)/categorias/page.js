"use client";
import React from "react";
import Link from "next/link";
import CardCategorias from "./../../Components/cardCategorias";
import categoria from "./../../../../public/images/categorias/category.png";
import { useState, useEffect } from "react";
import { getCategory } from "../../api/apiEcommerce";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCategorias() {
      const resultado = await getCategory();
      console.log("🚀 ➽ file: page.js:15  ➽ fetchCategorias  ➽ resultado ⏩" , resultado)
      setCategorias(resultado);
    }

    fetchCategorias();
  }, []);

  const [arrays,setArrays] = useState([]);
  

  console.log(categorias);

  return (
    // <section className="max-w-[1416px] w-full h-full py-[120px] px-5 mx-auto">
    <section className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5  py-[120px] mx-auto">
      <div className="w-full h-full grid grid-cols-1 gap-5 xl:gap-10 auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
        {categorias.map((categoria, index) => {
          return (
            <CardCategorias
              key={index}
              categoria={categoria}
              cor="#626262"
              corPadrao="bg-[rgba(255,_255,_255,_0.78)] group-hover:bg-[#fff]"
            />
          );
        })}
        {/* <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        /> */}
      </div>
    </section>
  );
}
