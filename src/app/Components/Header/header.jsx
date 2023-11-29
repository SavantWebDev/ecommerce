"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import ImageLogo from "../../../../public/images/logo.svg";
import { checkToken } from "../../api/api";
import { useRouter } from "next/navigation";
import Logo2 from "../../../../public/images/logo2.svg";
import carrinho from "../../../../public/images/assets/carrinho.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";
import { SearchIcon } from "./searchIcon";
import userSvg from "../../../../public/images/assets/user.svg";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Input,
  User,
} from "@nextui-org/react";

export default function Header() {
  const router = useRouter();
  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setNav(false);
  }
  function signIn(e) {
    e.preventDefault();

    router.push("/auth/login");
  }

  const [nav, setNav] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await checkToken();
      setNav(result);

      console.log("result aqui", result);
    }
    fetchData();
  }, []);
  console.log(checkToken);
  console.log("nav aqui:");
  console.log(nav);

  return (
    <header className="  w-full  flex flex-col items-center justify-between">
      <div className="bg-primaria text-center  w-full py-1">
        <span className="font-normal">20% de desconto em todo o site</span>
      </div>
      <nav className=" flex items-center justify-between max-w-[1416px] w-full h-[103px]  pt-5 px-5">
        <ul className="flex items-center ">
          <Image
            src={Logo2}
            width={78}
            height={55.432}
            alt="Logo"
            className="lg:mr-[47.21px]"
          />
          <li className="hidden lg:block">
            <Link className="font-semibold text-[18px]" href="/home">
              Home
            </Link>
          </li>
          <li className="ml-10 hidden lg:block">
            <Link className="font-semibold text-[18px]" href="/categorias">
              Categorias
            </Link>
          </li>
          <li className="ml-10 hidden lg:block">
            <Link className="font-semibold text-[18px]" href="#">
              Aluguel
            </Link>
          </li>
        </ul>
        <Input
        label="Search"
        isClearable
        radius="sm"
        
        classNames={{
          base: [
            "w-[30%]",
            "bg-[#F9F9F9]",
            "hidden",
            "xl:flex",
          ],
          input: ["bg-[#F9F9F9]",
          
          
        ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
        <div className="flex items-center gap-[16px]">
          {nav ? (
            <div className="hidden lg:flex items-center gap-4">
              <Dropdown placement="bottom-start">
                <DropdownTrigger className="gap-3">
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description=""
                    name={`Olá, ${nav.username}`}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={Logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-4">
              <Dropdown placement="bottom-start">
                <DropdownTrigger className="gap-3 p-1">
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: { userSvg },
                    }}
                    className="transition-transform"
                    description=""
                    name="Olá!"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="settings" onClick={signIn}>
                    Entre
                  </DropdownItem>
                  <DropdownItem key="team_settings">Registrar</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
          <div className="">
            <Image
              src="/images/assets/menu.svg"
              width={24}
              height={24}
              className="lg:hidden"
              alt="Ícone do menu"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold hidden lg:block">Carrinho</span>
            <div className="relative">
              <Image
                src={carrinho}
                width={25.5}
                height={25.5}
                alt="Ícone do carrinho"
              />
              <div className="absolute w-[13px] h-[14px] top-0 right-0 bg-[#fff] fill-[#fff] drop-shadow-lg flex items-center justify-center rounded-full">
                <span className="text-primaria text-[12px] font-semibold">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
