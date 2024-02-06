import TelefoneSac from "@/app/Components/usuario/suporte/telefone-sac";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

export default function SuporteUsuario() {
  return (
    <div className="bg-branco p-5 rounded-[20px] mt-5">
      <div className="flex items-center gap-2">
        <AiFillMessage className="text-primaria" size={24} />
        <h3 className="font-bold">Suporte</h3>
      </div>
      <div className="">
        <TelefoneSac />
      </div>
    </div>
  );
}
