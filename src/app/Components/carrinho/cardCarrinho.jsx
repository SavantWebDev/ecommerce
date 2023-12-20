import Image from "next/image";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";


export default function CardCarrinho({ean, image,nome,valor,quantidade}) {
  const {carrinhoCont, setCarrinhoCont,removerProduto} = useContext(CarrinhoContext)
  return (
    <div className="max-w-[640px] w-full h-[204px] flex items-center justify-between gap-3 border border-solid border-[#EAEAEA] rounded-xl px-5">
      {/* <p>{ean}</p> */}
      <div className="">
        <Image
          src={image?.replace('/','')}
          // src="/images/produtos/image 73.png"
          width={200}
          height={200}
          alt="Produto carrinho"
        />
      </div>
      <div className="flex flex-col  justify-center max-w-[200px]w-full gap-4">
        <span className="font-semibold">
          {nome}
        </span>
        <span className="text-cinza">{quantidade} unidades</span>
        <div className="flex items-center gap-5">
          <button className="text-primaria">Editar</button>
          <button className="text-cinza" onClick={() => removerProduto(ean)}>Remover</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="line-through text-cinza"> R$ 90,00</span>
        <span className="text-primaria text-xl font-semibold">{valor}</span>
        <div className="flex items-center gap-5">
          <button className="w-[34px] h-[34px] font-semibold text-xl flex items-center justify-center bg-cinza text-neutral-dark p-1 rounded-full">
            -
          </button>
          <span className="font-bold">{quantidade}</span>
          <button className="w-[34px] h-[34px] font-semibold text-xl  flex items-center justify-center bg-primaria text-neutral-dark p-1 rounded-full">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
