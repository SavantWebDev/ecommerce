"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UsuarioContext";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function LastOrders() {
  const { perfil } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Last orders: ", perfil);
    if (perfil) {
      setLoading(false);
    }
  }, [perfil]);
  const pedidos = perfil?.ultimosPedidos || [];

  const pedidosExibidos = {};
  console.log("Meus dados", pedidos);
  return (
    <div className="mt-[30px] flex flex-col gap-2 ">
      {loading ? (
        <div className="flex flex-col gap-3">
          <div className="bg-cinza-medio-d h-[60px] w-full rounded-xl animate-pulse"></div>
          <div className="bg-cinza-medio-d h-[60px] w-full rounded-xl animate-pulse"></div>
          <div className="bg-cinza-medio-d h-[60px] w-full rounded-xl animate-pulse"></div>
        </div>
      ) : (
        pedidos.map((pedido, index) => (
          <Accordion variant="splitted" className="!bg-[#F9F9F9] " key={index}>
            <AccordionItem
              className=""
              title={
                <div className="flex flex-wrap gap-10 max-lg:gap-5">
                  <div className="flex flex-col gap-[10px] items-start justify-start">
                    <span className="text-base font-bold">
                      Número do pedido
                    </span>
                    <span className="text-sm text-[#666] leading-[140%]">
                      {pedido.numeropedido}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[10px] items-start justify-start">
                    <span className="text-base font-bold">Pagamento</span>
                    <span className="text-sm uppercase text-[#666] leading-[140%]">
                      {pedido.nome_pagamento}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[10px] items-start justify-start">
                    <span className="text-base font-bold">Total</span>
                    <span className="text-sm text-[#666] leading-[140%]">
                      R$ {pedido.valortotal}
                    </span>
                  </div>
                </div>
              }
            >
              <div className="flex flex-col gap-3 items-start pb-5">
                <span className="flex flex-col text-sm font-semibold">
                  Produto(s):
                </span>
                {pedido.itens.map((item, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div className="">
                      <span className="italic text-primaria font-bold">
                        {item.nomeproduto}
                      </span>
                    </div>
                    <p className="font-semibold text-amarelo-mostarda">
                      Quantidade:{" "}
                      <span className="!font-normal">{item.qnt}</span>
                    </p>
                    <p className="font-bold text-amarelo-mostarda ">
                      Valor:{" "}
                      <span className="!font-semibold">
                        R$ {item.valorTotalProd}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        ))
      )}
    </div>
  );
}
