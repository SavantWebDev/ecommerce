import Image from "next/image";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function CardCarrinho({
  ean,
  image,
  nome,
  valor,
  quantidade,
  pix,
}) {
  console.log("🚀 ➽ file: cardCarrinho.jsx:13  ➽ image ⏩" , image)
  // console.log("ean produto carrinho:" ,ean)
  // console.log("ean produto carrinho:" ,nome)
  // const { carrinhoCont, setCarrinhoCont, removerProduto, addQtdCarrinho, removeQtdCarrinho } =
  //   useContext(CarrinhoContext);
  const { removerProduto, addQtdCarrinho, removeQtdCarrinho } =
    useContext(CarrinhoContext);
  console.log(pix);
  return (
    <div className="w-full h-[204px] flex items-center justify-between gap-3 border border-solid border-[#EAEAEA] rounded-xl px-5">
      {/* <p>{ean}</p> */}
      <div className="w-[30%]">
        <Image
          src={image}
          // src={image}
          width={200}
          height={200}
          alt="Produto carrinho"
        />
      </div>
      <div className="flex flex-col  justify-center w-[30%] gap-4">
        <span className="font-semibold">{nome}</span>
        <span className="text-cinza">{quantidade} unidades</span>
        <div className="flex items-center gap-5">
          <button className="text-primaria">Editar</button>
          <button className="text-cinza" onClick={() => removerProduto(ean)}>
            Remover
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[30%] items-center justify-center gap-1">
        <span className="line-through text-cinza"> R$ {valor}</span>
        <span className="text-primaria text-xl font-semibold">{pix}</span>
        <div className="flex items-center gap-5">
          <button
            className="w-[34px] h-[34px] font-semibold text-xl flex items-center justify-center bg-cinza text-neutral-dark p-1 rounded-full"
            onClick={(e) => removeQtdCarrinho(ean, quantidade)}
            disabled={quantidade === 1}
          >
            -
          </button>
          <span className="font-bold">{quantidade}</span>
          <button
            className="w-[34px] h-[34px] font-semibold text-xl  flex items-center justify-center bg-primaria text-neutral-dark p-1 rounded-full"
            onClick={(e) => addQtdCarrinho(ean, quantidade, e)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
