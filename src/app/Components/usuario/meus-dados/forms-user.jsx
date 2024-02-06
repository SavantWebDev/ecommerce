"use client";
import React, { useContext, useEffect, useState } from "react";
import PerfilUser from "../perfil";
import { FaUserAlt } from "react-icons/fa";
import DataUser from "./dataUser";
import { UserContext } from "../../context/UsuarioContext";
import userSvg from "public/images/userIcon.png";
const FormsUser = () => {
  const { FotoUsuario, perfil } = useContext(UserContext);

  const [user, setUser] = useState();
  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [foto, setFoto] = useState();
  const [img, setImg] = useState();
  const [date, setDate] = useState();
  const [dadosUser, setDadosUser] = useState();
  const [cpf, setCpf] = useState();
  useEffect(() => {
    setUser(perfil?.usuario?.username || "Usuario não encontrado");
    setMail(perfil?.usuario?.email || "Email indisponível");
    setTel(perfil?.usuario?.celular || "Celular não encontrado");
    setImg(perfil?.usuario?.imageProfile || userSvg);
    setDate(perfil?.usuario?.nascimento || "Data inválida");
    setCpf(perfil?.usuario?.cpf || "CPF não encontrado");
  }, [perfil]);

  const handleSubmit = (e) => {
    e.preventDefault();

    FotoUsuario({
      file: img,
      username: user,
      celular: tel,
    });
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <PerfilUser
        onFileChange={setImg}
        email={mail}
        username={user}
        userImg={img}
        perfil={perfil}
      />
      <div className="bg-branco mt-5 p-5 rounded-[20px]">
        <div className="flex gap-5">
          <FaUserAlt size={26} className="text-primaria" />
          <span className="text-xl font-bold leading-[140%]">
            Dados Básicos
          </span>
        </div>
        <div className="mt-5 w-full flex justify-center items-center gap-5">
          <span className="py-2 px-5 bg-[#f9f9f9] border border-solid border-[#f0f0f0] text-[#838383] rounded-[40px] font-bold transition-all  cursor-pointer  hover:transition-all hover:bg-primaria hover:text-neutral-dark ">
            Alterar Email
          </span>
          <span className="py-2 px-5 bg-[#f9f9f9] border border-solid border-[#f0f0f0] text-[#838383] rounded-[40px] font-bold transition-all  cursor-pointer  hover:transition-all hover:bg-primaria hover:text-neutral-dark ">
            Alterar Senha
          </span>
        </div>
        <DataUser
          usuario={setUser}
          numero={setTel}
          username={user}
          email={mail}
          nascimento={date}
          celular={tel}
          cpf={cpf}
        />
        {/* <div className="mt-5 w-full flex justify-center items-center gap-5">
        <span className="py-2 px-5 bg-[#f9f9f9] border border-solid border-[#f0f0f0] text-[#838383] rounded-[40px] font-bold transition-all  cursor-pointer  hover:transition-all hover:bg-primaria hover:text-neutral-dark ">
          Alterar Email
        </span>
        <span className="py-2 px-5 bg-[#f9f9f9] border border-solid border-[#f0f0f0] text-[#838383] rounded-[40px] font-bold transition-all  cursor-pointer  hover:transition-all hover:bg-primaria hover:text-neutral-dark ">
          Alterar Senha
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-[10px] mt-5">
        <div className="bg-[#F9F9F9] flex justify-between items-center h-[86px] rounded-[10px] p-5 ">
          <div className="">
            <h3 className="font-bold">Nome Completo</h3>
            <span className="font-light">Pedro Virgilio</span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] h-[86px] rounded-[10px] flex justify-between items-center p-5">
          <div className="">
            <h3 className="font-bold">Telefone Celular</h3>
            <span className="font-light">(86) 9 9400-6654</span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] h-[86px] rounded-[10px] flex justify-between items-center p-5">
          <div className="">
            <h3 className="font-bold">E-mail</h3>
            <span className="font-light">pedro@gmail.com</span>
          </div>
          <IoLockClosed size={26} className="text-primaria" />{" "}
        </div>
        <div className="bg-[#F9F9F9] h-[86px] rounded-[10px] flex justify-between items-center p-5">
          <div className="">
            <h3 className="font-bold">CPF</h3>
            <span className="font-light">211.381.290-89</span>
          </div>
          <IoLockClosed size={26} className="text-primaria" />{" "}
        </div>
        <div className="bg-[#F9F9F9] h-[86px] rounded-[10px] flex justify-between items-center p-5">
          <div className="">
            <h3 className="font-bold">Data de Nascimento</h3>
            <span className="font-light">27/11/2003</span>
          </div>
          <IoLockClosed size={26} className="text-primaria" />{" "}
        </div>
        <div className="bg-[#F9F9F9] h-[86px] rounded-[10px] flex justify-between items-center p-5">
          <div className="">
            <h3 className="font-bold">Senha</h3>
            <span className="font-light">********</span>
          </div>
          <IoLockClosed size={26} className="text-primaria" />{" "}
        </div>
      </div> */}
        <div className="mt-5 w-full flex justify-center gap-[10px] ">
          <span className="border border-solid border-neutral-dark h-[55px] justify-center rounded-[10px] font-bold w-1/2 text-center flex items-center cursor-pointer">
            Excluir conta
          </span>
          <button
            type="submit"
            className="bg-primaria h-[55px] justify-center rounded-[10px] font-bold w-1/2 text-center flex items-center cursor-pointer"
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormsUser;
