import LastOrders from "@/app/Components/usuario/orders/lastOrders";
import PerfilUser from "@/app/Components/usuario/perfil";
import PerfilUserHome from "@/app/Components/usuario/perfilUserHome";

import PtsFidelidade from "@/app/Components/usuario/pontosFidelidade";
import Image from "next/image";
import React from "react";
import { FaRegSnowflake } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoBeerOutline, IoReceipt } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function Usuario() {
  return (
    <>
      <PerfilUserHome />
      <div className="w-full flex gap-[10px] mt-[10px]">
        <PtsFidelidade
          icone={<FaRegSnowflake size={40} className="text-amarelo-mostarda" />}
          text="Cashback"
          pontos="R$ 12,00"
        />
        <PtsFidelidade
          icone={<IoBeerOutline size={40} className="text-amarelo-mostarda" />}
          text="Mls de Chopp"
          pontos="500 mls"
        />
      </div>
      <div className="bg-branco p-5 rounded-[20px]  mt-5 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <IoReceipt
              size={26}
              className="text-primaria
            "
            />
            <h3 className="text-xl font-bold text-neutral-dark">
              Últimos compras
            </h3>
          </div>
          <div className="bg-[#F0F0F0] flex items-center p-[8px_12px] gap-3 rounded-[40px] cursor-pointer">
            <h4 className="text-sm text-[#838383]">Ver todos</h4>
            <IoIosArrowForward className="text-[#838383]" size={15} />
          </div>
        </div>

        <LastOrders />
      </div>
    </>
  );
}
