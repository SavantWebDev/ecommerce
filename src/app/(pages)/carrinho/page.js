import TabelaProdutos from "../../Components/TabelaProdutos";

function PaginaCarrinho() {
  return (
    <section>
      <section className="mt-10">
        <div className="text-[13px] text-cinza">
          <span className="cursor-pointer hover:text-primaria after:content-['/'] after:px-1 hover:after:text-cinza leading-[1.4px]">
            Home
          </span>
          <span>Carrinho de compras</span>
        </div>
        <div className="pt-4 text-center text-[28px] font-bold uppercase">
          <h1>Carrinho de compras</h1>
        </div>
      </section>
      <section>
        <TabelaProdutos />
      </section>
    </section>
  );
}

export default PaginaCarrinho;
