"use client";
import { useContext, useEffect, useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { UserContext } from "../../context/UsuarioContext";
import { usePathname } from "next/navigation";

export default function DataUser({
  usuario,
  numero,
  username,
  celular,
  email,
  cpf,
  nascimento,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [itensPerfil, setItensPerfil] = useState([]);

  useEffect(() => {
    setItensPerfil([
      {
        title: "Nome Completo",
        value: username,
      },
      {
        title: "Telefone Celular",
        value: celular,
      },
      {
        title: "E-mail",
        value: email,
      },
      {
        title: "CPF",
        value: cpf,
      },
      {
        title: "Data de Nascimento",
        value: nascimento,
      },
      {
        title: "Senha",
        value: "********",
      },
    ]);
  }, [cpf, email, nascimento, username, celular]);

  const handleInputChange = (event, index) => {
    setItensPerfil((prevItensPerfil) => {
      const newPerfilItens = [...prevItensPerfil];
      newPerfilItens[index].value = event.target.value;
      const usernameItem = newPerfilItens.find(
        (item) => item.title === "Nome Completo"
      );
      const celularItem = newPerfilItens.find(
        (item) => item.title === "Telefone Celular"
      );
      usernameItem ? usuario(usernameItem.value) : "";
      celularItem ? numero(celularItem.value) : "";
      return newPerfilItens;
    });
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-[10px] mt-5">
      {itensPerfil.map((item, index) => (
        <div
          key={index}
          onClick={() => setIsClicked(true)}
          className={` ${
            isClicked[index] ? "bg-branco" : "bg-[#F9F9F9]"
          } flex justify-between items-center h-[86px] rounded-[10px] p-5 `}
        >
          <div className="w-full flex items-center justify-between">
            <div className="">
              <h3 className="font-bold">{item.title}</h3>
              <input
                className={`w-full font-light outline-none bg-transparent ${
                  isClicked ? "" : ""
                }`}
                onChange={(event) => handleInputChange(event, index)}
                value={item.value}
                type="text"
                disabled={
                  !(
                    item.title === "Nome Completo" ||
                    item.title === "Telefone Celular"
                  )
                }
              />
            </div>
            {item.title != "Nome Completo" &&
            item.title != "Telefone Celular" ? (
              <IoLockClosed className="text-primaria" size={25} />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
