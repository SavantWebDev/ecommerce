"use client";

import { usePathname, useRouter } from "next/navigation";
import { Router } from "next/router";

import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [userCont, setUserCont] = useState();
  const [perfil, setPerfil] = useState();
  const router = useRouter();
  const pathname = usePathname();
  async function login(email, senha) {
    const response = await fetch("http://20.197.251.208/v1/api/login", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM'
      },
      body: JSON.stringify({ email: email, senha: senha }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Erro ao enviar a mensagem.");
    }
  }
  // export const cadastro = async (email, senha, celular, cpf, nascimento, notificacao) => {
  //   const response = await fetch("http://20.197.251.208/v1/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM'
  //     },
  //     body: JSON.stringify({ email: email, senha: senha, celular: celular, cpf: cpf, notificacao: notificacao   }),
  //   });

  //   if (response.ok) {
  //     return await response.json();
  //   } else {
  //     throw new Error("Erro ao enviar a mensagem.");
  //   }
  // };

  async function loginVerify(token) {
    console.log("=============");
    console.log(token);
    console.log("loginverify");
    const res = await fetch("http://20.197.251.208/v1/api/usuario", {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      // Token estático
      //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM
    });
    const data = await res.json();
    return data;
  }

  async function checkToken() {
    var token = localStorage.getItem("token");
    if (token === null || token === "" || token === undefined) {
      return false;
    } else {
      try {
        const pegaToken = await loginVerify(token);
        const username = pegaToken.username;
        if (
          !pegaToken ||
          pegaToken.msg == "Token Expirado!" ||
          pegaToken.msg == "Token Inválido!" ||
          pegaToken.msg == "Acesso Negado" ||
          pegaToken.msg == "undefined"
        ) {
          return false;
        } else {
          return pegaToken;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }

  function perfilUser(token) {
    return fetch("http://20.197.251.208/v1/api/perfil", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPerfil(data);
        return data;
      })
      .catch((error) => console.error("Error:", error));
  }

  function FotoUsuario({ file, username, celular }) {
    const token = localStorage.getItem("token");

    // if (!file) {
    //   console.log("Nenhum arquivo selecionado");
    //   return;
    // }

    console.log(username);
    console.log(celular);

    console.log("A porra do file aqui", file);
    var formData = new FormData();

    if (file instanceof Blob) {
      formData.append("foto", file, file.name);
    }
    // Correção aqui
    formData.append("username", username);
    formData.append("telefone", celular);
    console.log("Meu formdata", formData);
    fetch("http://20.197.251.208/v1/api/edit", {
      cache: "no-store",
      method: "POST",
      headers: {
        Application:
          "multipart/form-data; boundary=<calculated when request is sent>",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserCont(data);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    perfilUser(token);
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginVerify,
        userCont,
        perfil,
        FotoUsuario,

        setUserCont,
        checkToken,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
