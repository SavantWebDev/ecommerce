import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

const ProductRow = ({ produto }) => {
  const { carrinhoApi, removeQtdCarrinho, addQtdCarrinho } =
    useContext(CarrinhoContext);
  const [subtotal, setsubtotal] = useState(0);
  useEffect(() => {
    function calculaSubTotal() {
      const qnt = produto.qnt;
      const valor = converterNumero(produto.valor);
      let total = valor * qnt;
      return setsubtotal(total.toFixed(2));
    }

    function converterNumero(num) {
      return parseFloat(num.replace(",", "."));
    }

    calculaSubTotal();
  }, [produto.qnt, produto.valor]);
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="text-left p-[0.5rem] w-[50%] flex items-center gap-6">
        <Image
          //  src={image?.replace("/", "")}
          src="/images/produtos/image 73.png"
          width={100}
          height={100}
          alt={produto.nomeproduto}
        />
        <span>{produto.nomeproduto}</span>
      </div>
      <div className="text-center p-[0.5rem] w-[20%]">
        <div className="flex items-center justify-center gap-3">
          <button
            className="w-[34px] h-[34px] font-semibold text-xl flex items-center justify-center bg-cinza text-neutral-dark p-1 rounded-full"
            onClick={(e) => removeQtdCarrinho(produto.eanproduto, produto.qnt)}
          >
            -
          </button>
          <span className="font-bold">{produto.qnt}</span>
          <button
            className="w-[34px] h-[34px] font-semibold text-xl  flex items-center justify-center bg-primaria text-neutral-dark p-1 rounded-full"
            onClick={(e) => addQtdCarrinho(produto.eanproduto, produto.qnt, e)}
          >
            +
          </button>
        </div>
      </div>
      <span className="text-center p-[0.5rem] w-[15%]">R$ {produto.valor}</span>
      <span className="text-center p-[0.5rem] w-[15%]">R$ {subtotal}</span>
    </div>
  );
};

export default ProductRow;
