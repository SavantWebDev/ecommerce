"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
// import { checkToken } from "../../api/api";
import { useRouter } from "next/navigation";
import Logo2 from "../../../../public/images/logo2.svg";
import imGcarrinho from "../../../../public/images/assets/carrinho.svg";
import { IoMenuOutline } from "react-icons/io5";
import { SearchIcon } from "./searchIcon";
import { IoStopwatchOutline } from "react-icons/io5";
import userSvg from "../../../../public/images/userIcon.png";
import { IoSnow } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Input,
  User,
} from "@nextui-org/react";
import BarraCarrinho from "../carrinho/carrinho";
import { usePathname } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";
import { Cairo } from "next/font/google";
import { useContext } from "react";
import { UserContext } from "../context/UsuarioContext";
import { CarrinhoContext } from "../context/CarrinhoContext";
export default function Header() {
  const { checkToken, perfil } = useContext(UserContext);
  const { contadorCarrinho } = useContext(CarrinhoContext);
  const quantidadeItensNoCarrinho = contadorCarrinho();
  const [pesquisaInput, setPesquisaInput] = useState([]);
  const [nav, setNav] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuNavigation, setIsMenuNavigation] = useState(false);
  const [carrinho, setIsCarrinho] = useState(false);
  const userImg = perfil?.usuario?.imageProfile || userSvg;
  const [img, setImg] = useState();
  const isDesktop =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false;

  const router = useRouter();
  const pathname = usePathname();
  const toggleMenu = (e) => {
    e.preventDefault();

    setIsMenuOpen(!isMenuOpen);
    setIsMenuNavigation(false);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  function closeMenu(e) {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    router.push("/home");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  function signIn(e) {
    e.preventDefault();
    router.push("/auth/login");
  }
  function cadastroClick(e) {
    e.preventDefault();
    router.push("/auth/cadastro");
  }

  const navigationMobile = (e) => {
    e.preventDefault();

    setIsMenuNavigation(!isMenuNavigation);
  };
  function estadoCarrinho(e) {
    e.preventDefault();
    setIsCarrinho(!carrinho);
    if (!carrinho) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  useEffect(() => {
    // if (pathname === "/usuario") {
    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     router.push("/auth/login");
    //   }
    // }
    async function fetchData() {
      const result = await checkToken();
      setNav(result);
    }
    fetchData();

    setImg(userImg);
  }, [checkToken, userImg]);

  return (
    <>
      <div className=" top-0 bg-neutral-dark flex items-center gap-10 justify-center  w-full h-[59px] max-lg:h-auto max-lg:py-2">
        <span className=" text-primaria font-semibold uppercase text-center">
          20% de desconto
        </span>
      </div>
      <header className="relative w-full flex flex-col bg-[#F7F7F7] ">
        <div className="w-full flex items-center h-auto py-2 justify-between mx-auto max-2xl:px-5  xl:max-w-[1416px] 3xl:max-w-[1516px]">
          <Link href="/home">
            <Image
              src={Logo2}
              width={116}
              height={83}
              alt="Logo"
              className="max-lg:max-w-[78px] max-lg:h-[56px]"
            />
          </Link>
          <Input
            label="Search"
            isClearable
            radius="sm"
            className="w-[40%] mx-5 bg-[#fff] max-mc:hidden "
            value={pesquisaInput}
            onChange={(event) => setPesquisaInput(event.target.value)}
            onKeyPress={(event) => {
              console.log(event.key);
              if (event.key === "Enter") {
                event.preventDefault();
                router.push(`/pesquisa/${pesquisaInput}`);
              }
            }}
            classNames={{
              label: ["hidden"],
              base: ["rounded-[10px]", "!items-center"],
              innerWrapper: ["!items-center", "gap-5", "!bg-[#fff]"],
              inputWrapper: ["bg-[#fff]", "!bg-[#fff]", "!h-[45px]"],
            }}
            placeholder="Busque por um item"
            startContent={
              <SearchIcon className="text-primaria mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div className="flex items-center gap-[30px]">
            {nav ? (
              <div className="flex max-lg:hidden items-center gap-4">
                <Dropdown placement="bottom-start">
                  <DropdownTrigger className="gap-3">
                    <User
                      as="button"
                      avatarProps={{
                        src: img || userSvg,
                      }}
                      className=""
                      description="Bem vindo(a)!"
                      name={`Olá, ${nav.username}`}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem>
                      <Link href="/usuario">Minha conta</Link>
                    </DropdownItem>
                    <DropdownItem>Configurações</DropdownItem>
                    <DropdownItem>
                      <Link href="/usuario/suporte">Help & Feedback</Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={Logout}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : (
              <div className="flex max-lg:hidden items-center gap-4">
                <Dropdown placement="bottom-start">
                  <DropdownTrigger className="gap-3 p-1">
                    <User
                      as="button"
                      avatarProps={{
                        src: "/images/userIcon.png",
                      }}
                      className="transition-transform"
                      description="Faça login ou cadastre-se"
                      name="Olá, visitante!"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="settings" onClick={signIn}>
                      Login
                    </DropdownItem>
                    <DropdownItem key="team_settings" onClick={cadastroClick}>
                      Cadastre-se
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
            <div className="flex items-center max-lg:gap-5">
              <span className="font-semibold hidden lg:block">Carrinho</span>
              <div onClick={estadoCarrinho} className="cursor-pointer relative">
                <Image
                  src={imGcarrinho}
                  width={25.5}
                  height={25.5}
                  alt="Ícone do carrinho"
                />
                <div className="absolute w-[13px] h-[14px] top-0 right-0 bg-[#fff] fill-[#fff] drop-shadow-lg flex items-center justify-center rounded-full">
                  <span className="text-primaria text-[12px] font-semibold">
                    {quantidadeItensNoCarrinho}
                  </span>
                </div>
              </div>
              <div
                onClick={toggleMenu}
                className={`hidden max-lg:block max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out`}
              >
                <IoMenu size={34} />
              </div>
            </div>
          </div>
        </div>
        <BarraCarrinho carrinho={carrinho} setCarrinho={setIsCarrinho} />
        <nav
          className={`max-lg:absolute max-lg:top-0 w-full z-30 bg-primaria max-lg:bg-transparent h-[59px] max-lg:h-0
        `}
        >
          <div
            onClick={closeMenu}
            className={`
              max-lg:z-0
              ${
                isMenuOpen
                  ? "max-lg:bg-neutral-dark max-lg:absolute max-lg:w-full max-lg:h-screendv max-lg:opacity-20 max-lg:right-0 max-lg:top-0 "
                  : "max-lg:hidden"
              }
            
            `}
          ></div>
          <ul
            className={`w-full h-full flex items-center justify-center gap-[70px]
max-lg:left-0 max-lg:flex-col max-lg:z-50 max-lg:h-screendv max-lg:bg-[#F7F7F7] max-lg:gap-5 max-lg:justify-start max-lg:items-start max-lg:p-5 max-lg:pt-10 max-lg:transition-transform max-lg:duration-500 max-lg:w-[70%] max-lg:ease-in-out max-lg:relative 
  ${isMenuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
  `}
          >
            <IoClose
              onClick={toggleMenu}
              className="absolute top-1 right-1 lg:hidden"
              size={40}
              color="black"
            />
            {nav ? (
              <div className="flex flex-col lg:hidden items-start justify-start w-full p-3 bg-[#fff] rounded-lg gap-4">
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: userImg || userSvg,
                  }}
                  className="transition-transform"
                  description=""
                  name={`Olá, ${nav.username}`}
                />
                <div className="flex flex-col gap-5 mt-2">
                  <Link
                    className="lg:hidden flex items-center gap-2"
                    href="/usuario"
                  >
                    <FaRegUserCircle size={24} />
                    Minha conta
                  </Link>
                  <Link
                    className="lg:hidden flex items-center gap-2"
                    href="/usuario/meus-dados"
                  >
                    <HiOutlineShoppingBag size={24} />
                    Meus pedidos
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:hidden items-start justify-start w-full p-3 bg-[#fff] rounded-lg gap-4">
                <User
                  as="button"
                  avatarProps={{
                    src: "/images/userIcon.png",
                  }}
                  className="transition-transform"
                  description="Faça login ou cadastre-se"
                  name="Olá, visitante!"
                />
                <div className="flex flex-col gap-5 mt-2">
                  <Link className="lg:hidden flex items-center gap-2" href="#">
                    <FaRegUserCircle size={24} />
                    Login
                  </Link>
                  <Link className="lg:hidden flex items-center gap-2" href="#">
                    <HiOutlineShoppingBag size={24} />
                    Cadastro
                  </Link>
                </div>
              </div>
            )}
            <div className="w-full flex justify-center items-center gap-[70px] max-lg:flex-col max-lg:gap-5 max-lg:items-start ">
              <li>
                <Link
                  {...(isDesktop
                    ? {
                        onMouseEnter: () => {
                          setIsMenuNavigation(true);
                        },
                      }
                    : {
                        onClick: navigationMobile,
                      })}
                  // onMouseEnter={() => {
                  //   // document.body.classList.add("overflow-hidden");
                  //   setIsMenuNavigation(true);
                  // }}
                  href="#"
                  className="text-[#090909] font-semibold flex items-center gap-[10px] "
                >
                  <IoMenuOutline size={24} />
                  Tudo para beber
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#090909] font-semibold flex items-center gap-[10px]"
                >
                  <TbSpeakerphone size={24} />
                  Promoções
                </Link>
              </li>
              <li>
                <Link
                  href="/fidelidade"
                  className="text-[#090909] font-semibold flex items-center gap-[10px]"
                >
                  <IoSnow size={24} />
                  Programa de Fidelidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#090909] font-semibold flex items-center gap-[10px]"
                >
                  <IoStopwatchOutline size={24} />
                  Aluguel
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-[#090909] font-semibold flex items-center gap-[10px]"
                >
                  <CgFileDocument size={24} />
                  Categorias
                </Link>
              </li>
            </div>
            <Input
              label="Search"
              isClearable
              radius="sm"
              className="w-full bg-[#fff] lg:hidden "
              value={pesquisaInput}
              onChange={(event) => setPesquisaInput(event.target.value)}
              onKeyPress={(event) => {
                console.log(event.key);
                if (event.key === "Enter") {
                  event.preventDefault();
                  router.push(`/pesquisa/${pesquisaInput}`);
                }
              }}
              classNames={{
                label: ["hidden"],
                base: ["rounded-[10px]", "!items-center"],
                innerWrapper: ["!items-center", "gap-5", "!bg-[#fff]"],
                inputWrapper: ["bg-[#fff]", "!bg-[#fff]", "!h-[45px]"],
              }}
              placeholder="Busque por um item"
              startContent={
                <SearchIcon className="text-primaria mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
            {nav ? (
              <button
                onClick={Logout}
                className="bg-primaria w-full  py-2 lg:hidden font-extrabold text-md uppercase rounded-[0.25rem]"
              >
                Sair
              </button>
            ) : (
              <div className="w-full lg:hidden flex flex-col gap-2">
                <button
                  onClick={signIn}
                  className="bg-primaria w-full  py-2 lg:hidden font-bold text-md  rounded-[0.25rem]"
                >
                  Faça Login
                </button>
                <Link
                  href="/auth/cadastro"
                  className=" w-full text-center  py-2 lg:hidden font-semibold text-md rounded-[0.25rem]"
                >
                  Cadastre-se
                </Link>
              </div>
            )}
          </ul>

          <div className={`relative ${isMenuNavigation ? "block" : "hidden"}`}>
            <div className="absolute w-full max-lg:hidden  h-[1400px] z-20 bg-[#000000] opacity-20"></div>
            <div
              id="navigation"
              onMouseLeave={() => {
                // document.body.classList.remove("overflow-hidden");
                setIsMenuNavigation(false);
              }}
              className="bg-[#fff] absolute flex items-start p-10 gap-[80px] max-w-[957px] w-full z-40 left-1/2 translate-x-[-50%] h-[300px]
              max-lg:max-w-full max-lg:h-screendv
              max-lg:p-2 max-lg:flex-col max-lg:gap-0
              "
            >
              <button
                onClick={() => {
                  setIsMenuNavigation(false);
                }}
                className="lg:hidden transition-transform duration-500 ease-out"
                href=""
              >
                <IoChevronBack className="text-primaria" size={24} color="" />
              </button>
              <div className="w-full max-lg:h-screendv flex max-lg:flex-col max-lg:items-center max-lg:justify-start gap-[50px] ">
                <div className="flex flex-col justify-start max-lg:justify-center gap-5">
                  <h3 className="text-primaria font-bold  uppercase">
                    Categorias
                  </h3>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-5 ">
                  <h3 className="text-primaria  font-bold  uppercase">
                    Cervejas
                  </h3>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                  <Link href="#" className="font-semibold">
                    Bebidas quentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
