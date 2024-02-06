"use client";
import { MdHome } from "react-icons/md";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function MenuUsuario() {
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { href: "/usuario", text: "Início", Icon: MdHome },
    { href: "/usuario/meus-dados", text: "Meus dados", Icon: FaUserAlt },
    { href: "/usuario/suporte", text: "Suporte", Icon: MdOutlineSupportAgent },
    {
      href: "/usuario/endereco",
      text: "Endereco",
      Icon: MdOutlineSupportAgent,
    },
    // Adicione mais itens conforme necessário
  ];
  return (
    <div className="w-[368px] bg-[#fff]   flex flex-col items-start  rounded-[20px] max-lg:bg-primaria max-lg:w-full max-lg:fixed max-lg:bottom-0 max-lg:rounded-none  ">
      <h3 className="p-5 font-bold text-lg max-lg:hidden">Minha conta</h3>
      <ul className="w-full list-none max-lg:flex max-lg:items-center max-lg:justify-center ">
        {menuItems.map(({ href, text, Icon }) => (
          <li
            key={href}
            className={`   ${
              pathname === href ? "bg-[#FFEAA6]" : ""
            } max-lg:rounded-xl `}
          >
            <Link
              href={href}
              className="w-full flex items-center gap-5 p-4 leading-[140%] text-[16px] font-normal max-lg:gap-2"
            >
              <Icon
                className={` ${
                  pathname === href ? "text-[#554503]" : "text-primaria"
                } max-lg:text-[#000]`}
                size={24}
              />
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
