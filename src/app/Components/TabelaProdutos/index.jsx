"use client";
import React, { useContext } from "react";
import ProductRow from "../ProductRow";
import { CarrinhoContext } from "../context/CarrinhoContext";

const TabelaProdutos = () => {
  const { carrinhoApi } = useContext(CarrinhoContext);
  console.log("carrinho page", carrinhoApi);

  return (
    <div className="flex">
      <div className="w-[60%]">
        <div>
          <ul className="uppercase tracking-[.05rem] leading-[1.05px] text-left font-bold flex gap-3">
            <li className="text-left p-[0.5rem] w-[50%]">Produtos</li>
            <li className="text-center p-[0.5rem] w-[20%]">Quantidade</li>
            <li className="text-center p-[0.5rem] w-[15%]">Preço</li>
            <li className="text-center p-[0.5rem] w-[15%]">Subtotal</li>
          </ul>
        </div>
        <div>
          {carrinhoApi.map((produto) => (
            <ProductRow key={produto.eanproduto} produto={produto} />
          ))}
        </div>
      </div>
      <div className="w-[40%]">

      </div>
    </div>
  );
};

export default TabelaProdutos;
