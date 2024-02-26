// api.js
export const login = async (email, senha) => {
  const response = await fetch(
    "https://iceberg.savantweb.com.br/v1/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM'
      },
      body: JSON.stringify({ email: email, senha: senha }),
    }
  );

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Erro ao enviar a mensagem.");
  }
};
// export const cadastro = async (email, senha, celular, cpf, nascimento, notificacao) => {
//   const response = await fetch("https://iceberg.savantweb.com.br/v1/api/login", {
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

export const loginVerify = async (token) => {
  console.log("=============");
  console.log(token);
  console.log("loginverify");
  const res = await fetch("https://iceberg.savantweb.com.br/v1/api/usuario", {
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
};

// export const checkToken = async () => {
//   var token = localStorage.getItem("token");
//   // var token2 = "eyJhbciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM";
//   if (token === null ||token === "" || undefined) {
//     return false;
//   } else {
//     try {
//       const pegaToken = await loginVerify(token);
//       console.log('pega token')
//       console.log(pegaToken);
//       const username = pegaToken.username;
//       if (pegaToken.msg == "Token Inválido!" || pegaToken.msg == "Acesso Negado") {
//         console.log("invalido====");
//         console.log("Removendo token inválido do localStorage");
//         window.location.reload();
//         localStorage.removeItem("token")
//         return false;
//       } else {
//         console.log('pegatoken aqui:' ,pegaToken)
//         return pegaToken;
//       }
//     } catch (error) {
//       console.log(error);

//       return false;
//     }
//   }
// };

export const cadastro = async (
  nome,
  email,
  senha,
  idade,
  cpf,
  notificacoes,
  numero
) => {
  const response = await fetch(
    "https://iceberg.savantweb.com.br/v1/api/cadastrar",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
        nascimento: idade,
        cpf: cpf,
        notificacao: notificacoes,
        celular: numero,
      }),
    }
  );

  console.log(response);
  return response;
};
