import { IoClose } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";
import CardCarrinho from "./cardCarrinho";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function BarraCarrinho({ carrinho, setCarrinho }) {
  const {carrinhoCont, setCarrinhoCont} = useContext(CarrinhoContext)
  
  function fecharCarrinho(e) {
    e.preventDefault();
    setCarrinho(!carrinho);
    if (!carrinho) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <section
      className={`relative  w-full h-full   ${
        carrinho ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex flex-col transform px-5 pt-5 transition-transform ease-in-out duration-300 fixed overflow-auto  z-50 right-0 bg-[#fff] h-screendv w-[60%] lg:w-[30%] ${
          carrinho ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <RiShoppingBagFill size={30} className="text-primaria" />
            <h3 className="text-lg">Você adicionou 3 itens</h3>
          </div>

          <IoClose
            className="cursor-pointer"
            onClick={fecharCarrinho}
            size={30}
            color="red"
          />
        </div>
        <div className="mt-5 flex flex-col gap-5">
          {carrinhoCont.map((item) => {
            return <CardCarrinho ean={item.ean} nome={item.nomeproduto} image={item.image} valor={item.valor} quantidade={item.qtd}/>
          })}
          {/* <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho /> */}
        </div>
      </div>

      <div
        className={`absolute z-40 bg-neutral-dark opacity-30 backdrop-blur-2xl h-screendv w-full ${
          carrinho ? "block" : "hidden"
        }}`}
      ></div>
    </section>
  );
}
