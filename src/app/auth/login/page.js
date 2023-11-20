"use client";
import { useState, useEffect } from "react";
import Input from "@/app/Components/InputComponent";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline, IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import LogoForms from "@/app/Components/FormsLoginCadastro/logo";
import ButtonForms from "@/app/Components/FormsLoginCadastro/buttonForms";
import Link from "next/link";
import LoginSocial from "@/app/Components/FormsLoginCadastro/loginsocial";
import RedirectLoginCadastro from "@/app/Components/FormsLoginCadastro/redirectLoginCadastro";
import { login, loginVerify } from "@/app/api/api";
import { useRouter } from "next/navigation";

export default function Loginauth() {
  // const [nome, setNome] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [senhaConfirma, setSenhaConfirma] = useState("");
  // Previne a ação padrão de submissão do formulário
  const [check, setChecker] = useState(false);

  useEffect(() => {
    console.log(check); // Isso será executado sempre que o estado 'check' mudar
  }, [check]);

  function checkVerify(e) {
    setChecker(e.target.checked);
    if (e.target.checked) {
      const checkLogin = document.getElementById("checkLogin");
      
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("senha");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(email, senha, token);
      console.log(res);
      var token = res.token;
      console.log(token);
      localStorage.setItem("token", token);
      const resVerify = await loginVerify(localStorage.getItem("token"));
      console.log(token);
      console.log(resVerify);
      router.push("/");
      
    } catch (error) {
      alert(error.message);
      router.push("/auth/login");
    }
  }; // Exibe os valores dos inputs no console

  return (
    <div className="flex w-full h-full flex-col items-center justify-center mx-auto py-2">
      <LogoForms
        titulo="Bem vindo de volta"
        subtitulo="Coloque suas credenciais para acessar o sistema"
      />
      <form
        id="formsLogin"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-[463px] w-full"
        action=""
      >
        <Input
          icone={<CiMail />}
          label="Digite seu Email:"
          obrigatorio={true}
          placeholder="Email"
          tipo="email"
          valor={email}
          aoAlterado={(valor) => {
            setEmail(valor);
            console.log(valor);
          }}
        />
        <Input
          icone={<IoKeyOutline />}
          label="Senha"
          obrigatorio={true}
          placeholder="Digite sua senha"
          tipo="password"
          mostrarIcone={<IoEyeSharp />}
          esconderIcone={<FaEyeSlash />}
          valor={senha}
          aoAlterado={(valor) => {
            setSenha(valor);
            console.log(valor);
          }}
        />

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              id="checkLogin"
              checked={check}
              onChange={checkVerify}
              className="w-[19px] h-[19px] border border-[#D9D9D9] rounded-[4px]"
              type="checkbox"
            />
            <p className="text-[14px]">lembrar-se de mim</p>
          </div>
          <Link
            href=""
            className="text-primary border-b border-solid text-[14px]"
          >
            Esqueceu a senha?
          </Link>
        </div>
        <ButtonForms>Continuar</ButtonForms>
      </form>

      <LoginSocial />
      <RedirectLoginCadastro
        fraseLink="Não tem conta?"
        link="Cadastre-se"
        href="/auth/cadastro"
      />
    </div>

    // <form className=''>
    //   <h1>Formulário de Login</h1>
    // <Input
    //     icone={<CiMail />}
    //     label="Digite seu email:"
    //     type="email"
    //     obrigatorio={true}
    //     placeholder="Digite seu Email"
    // />
    // <Input
    //     icone={<IoKeyOutline />}
    //     label="Digite sua senha:"
    //     type="password"
    //     obrigatorio={true}
    //     placeholder="Digite seu Email"
    // />
    // </form>
  );
}
