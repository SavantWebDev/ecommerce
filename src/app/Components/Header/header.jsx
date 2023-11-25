"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import ImageLogo from "../../../../public/images/logo.svg";
import { User } from "@nextui-org/react";
import { checkToken } from "../../api/api";
import { useRouter } from "next/navigation";
import Logo2 from "../../../../public/images/logo2.svg";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  const router = useRouter();
  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setNav(false);
  }

  const [nav, setNav] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await checkToken();
      setNav(result);
      console.log(result);
    }
    fetchData();
  }, []);
  console.log(checkToken);

  return (
    <header className="w-full flex flex-col items-center justify-between">
      <div className="bg-primaria text-center  w-full py-1">
        <span className="font-normal">20% de desconto em todo o site</span>
      </div>
      <nav className="flex items-center w-full justify-between px-8 py-1">
        <ul className="flex gap-10 items-center">
          <Image
            src={Logo2}
            width={100}
            height={100}
            alt="Logo"
            className="w-[100px"
          />
          <li>
            <Link className="font-semibold" href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href="#">
              Categorias
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href="#">
              Aluguel
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          {nav ? (
            <div className="">
              <User
                name={nav}
                description=""
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />

              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <div className="flex gap-3 items-center transition-transform">
              <Link
                href="/auth/login"
                className="p-2 border border-solid border-[#ccc]"
              >
                Login
              </Link>
              <Link
                href="/auth/cadastro"
                className="p-2 border border-solid border-[#ccc]"
              >
                Cadastro
              </Link>
            </div>
          )}
          <MdOutlineShoppingCart
          size={30}
          className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
