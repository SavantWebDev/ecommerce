import React from "react";
import CardCategorias from "./../../Components/cardCategorias";
import categoria from "./../../../../public/images/categorias/category.png";

export default function Categorias() {
  return (
    <section className="max-w-[1416px] w-full h-full py-[120px] px-5 mx-auto">
      <div className="w-full h-full grid grid-cols-1 gap-5 xl:gap-10 auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
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
        />
        <CardCategorias
          categoria="Destilados"
          titulo="Vodka"
          imagem={categoria}
        />
      </div>
    </section>
  );
}
