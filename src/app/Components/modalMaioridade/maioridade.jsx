"use client";
import Image from "next/image";
import Logo2 from "public/images/logo2.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
export default function Maioridade() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const maioridade = localStorage.getItem("maioridade");
    if (maioridade !== "true") {
      setIsOpen(true);
    }
  }, []);
  return isOpen ? (
    <div className="fixed z-50 w-full h-full flex items-center justify-center">
      <div className="absolute w-full h-full bg-cor-preto opacity-60"></div>

      <div className="relative bg-branco flex flex-col items-center gap-8  p-10 rounded-xl ">
        <div>
          <Image alt="logo 18" src={Logo2} width={100} height={100} />
        </div>

        <h1 className="text-3xl font-bold text-cor-preto">
          Você possui 18 anos ou mais?
        </h1>
        <div className="flex gap-4 ">
          <button
            className="flex items-center gap-2 bg-primaria text-white py-2 px-5 rounded-[20px]"
            onClick={() => {
              localStorage.setItem("maioridade", true);
              setIsOpen(false);
            }}
          >
            <span className="text-lg">Sim</span>
            <IoIosCheckmarkCircleOutline size={24} />
          </button>
          <Link
            href="https://www.ambev.com.br/consumo-responsavel-aviso"
            className="flex items-center gap-2 bg-cor-preto text-branco py-2 px-5 rounded-[20px]"
          >
            <span className="text-lg">Não</span>
            <IoMdCloseCircleOutline size={24} />
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
