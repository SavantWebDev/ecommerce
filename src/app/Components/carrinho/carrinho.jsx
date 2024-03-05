import { IoClose } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";
import CardCarrinho from "./cardCarrinho";
import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { useRouter } from "next/navigation";

export default function BarraCarrinho({ carrinho, setCarrinho }) {
  // const {carrinhoCont, setCarrinhoCont} = useContext(CarrinhoContext)
  const router = useRouter();
  const {
    carrinhoLocalStorage,
    setCarrinhoLocalStorage,
    usuarioLogado,
    carrinhoApi,
    carrinhoApiLS,
    setCarrinhoApiLs,
    totalCarrinho,
    SubTotalCarrinho,
  } = useContext(CarrinhoContext);
    console.log("🚀 ➽ file: carrinho.jsx:21  ➽ BarraCarrinho  ➽ carrinhoApi ⏩" , carrinhoApi)
  console.log(carrinhoLocalStorage.length);
  console.log(carrinhoLocalStorage);
  // console.log(usuarioLogado)
  // console.log(carrinhoApi)
  // console.log(carrinhoApi.length)
  // console.log(carrinhoApiLS)
  // console.log(carrinhoApiLS.length)

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
      className={`relative  w-full h-full   ${carrinho ? "block" : "hidden"}`}
    >
      <div
        className={`flex flex-col transform pt-5 transition-transform ease-in-out duration-300 fixed  z-50 right-0 bg-[#fff] h-screendv w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[30%] 
        lg:w-[50%] md:w-[65%] sm:w-[75%] mb:w-full mn:w-full ${
          carrinho ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[5%] gap-0">
          <div className="flex gap-2 items-center">
            <RiShoppingBagFill size={30} className="text-primaria" />
            <h3 className="text-lg">{`Você adicionou ${
              usuarioLogado
                ? (carrinhoApi && carrinhoApi.length) || 0
                : (carrinhoLocalStorage && carrinhoLocalStorage.length) || 0
            } itens`}</h3>
          </div>

          <IoClose
            className="cursor-pointer"
            onClick={fecharCarrinho}
            size={30}
            color="red"
          />
        </div>
        <div className="lg:h-[80%] md:h-[85%] sm:h-[85%] mc:h-[85%] mn:h-[85%] mb:h-[88%] flex flex-col justify-between">
          <div className=" flex flex-col gap-5 px-5 h-[100%] overflow-auto">
            {usuarioLogado ? (
              carrinhoApi && carrinhoApi.length > 0 ? (
                carrinhoApi.map((item) => (
                  <CardCarrinho
                    ean={item.eanproduto}
                    nome={item.nomeproduto}
                    image={item.image}
                    valor={item.valor}
                    pix={item.valor_pix}
                    quantidade={item.qnt}
                    key={item.eanproduto}
                  />
                ))
              ) : (
                <p>Nenhum item no carrinho</p>
              )
            ) : Array.isArray(carrinhoLocalStorage) &&
              carrinhoLocalStorage.length > 0 ? (
              carrinhoLocalStorage.map((item) => (
                <CardCarrinho
                  ean={item.eanproduto}
                  nome={item.nomeproduto}
                  image={item.image}
                  pix={item.pix}
                  valor={item.valor}
                  quantidade={item.qnt}
                  key={item.eanproduto}
                />
              ))
            ) : (
              <p>Nenhum item no carrinho</p>
            )}
          </div>

          <div className="bg-amarelo-medio-m h-[215px] w-full px-11 mb:pb-60">
            <div className="pt-[42px] mb-[32px] ">
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold leading-[140%]">Subtotal</p>
                  <span className="text-amarelo-mostarda font-semibold leading-[140%] line-through">
                    R$ {SubTotalCarrinho}
                  </span>
                </div>
                <div className="flex justify-between mt-[10px] mb-5">
                  <p className="text-xl font-semibold leading-[140%]">Total</p>
                  <span className="text-xl font-semibold leading-[140%]">
                    R$ {totalCarrinho}
                  </span>
                </div>
              </div>
              <button
                className="text-branco text-lg font-semibold leading-[140%] bg-neutral-dark text-center w-full py-5 rounded-[10px]"
                onClick={() => {
                  if (usuarioLogado) {
                    router.push("/carrinho");
                  } else {
                    router.push("/auth/login");
                  }
                }}
              >
                Escolher forma de pagamento
              </button>
            </div>
          </div>
        </div>

        {/* Carrinho Novo */}
        {/* <div className="flex items-center justify-between px-5">
          <div className="flex gap-2 items-center">
            <RiShoppingBagFill size={30} className="text-primaria" />
            <h3 className="text-lg">{`Você adicionou ${
              usuarioLogado
                ? carrinhoApi.length === undefined || carrinhoApi.length === 0
                  ? "0"
                  : carrinhoApi.length
                : carrinhoLocalStorage.length
            } itens`}</h3>
          </div>

          <IoClose
            className="cursor-pointer"
            onClick={fecharCarrinho}
            size={30}
            color="red"
          />
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4">
          <div className=" flex flex-col gap-5 px-5 h-[500px] overflow-auto">
            {usuarioLogado ? (
            carrinhoApi && carrinhoApi.length > 0 ? (
              carrinhoApi.map((item) => (
                <CardCarrinho
                  ean={item.eanproduto}
                  nome={item.nomeproduto}
                  image={item.image}
                  valor={item.valor}
                  quantidade={item.qnt}
                  key={item.eanproduto}
                />
              ))
            ) : (
              <p>Nenhum item no carrinho</p>
            )
          ) : Array.isArray(carrinhoLocalStorage) && carrinhoLocalStorage.length > 0 ? (
            carrinhoLocalStorage.map((item) => (
              <CardCarrinho
                ean={item.eanproduto}
                nome={item.nomeproduto}
                image={item.image}
                valor={item.valor}
                quantidade={item.qnt}
              />
            ))
           ) : (
            <p>Nenhum item no carrinho</p>
           )}
          </div>
          <div className="bg-amarelo-medio-m h-[215px] w-full px-11">
            <div className="pt-[42px] mb-[32px] ">
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold leading-[140%]">Subtotal</p>
                  <span className="text-amarelo-mostarda font-semibold leading-[140%] line-through">
                    R$ {totalCarrinho}
                  </span>
                </div>
                <div className="flex justify-between mt-[10px] mb-5">
                  <p className="text-xl font-semibold leading-[140%]">Total</p>
                  <span className="text-xl font-semibold leading-[140%]">
                    R$ {totalCarrinho}
                  </span>
                </div>
              </div>
              <button className="text-branco text-lg font-semibold leading-[140%] bg-neutral-dark text-center w-full py-5 rounded-[10px]"
                onClick={() => {
                  if(usuarioLogado) {
                    router.push("/carrinho")
                  } else {
                    router.push("/auth/login")
                  }
                }}
              >
                Escolher forma de pagamento
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div
        className={`absolute z-40 bg-neutral-dark opacity-30 backdrop-blur-2xl h-screendv w-full ${
          carrinho ? "block" : "hidden"
        }}`}
      ></div>
    </section>
  );
}
