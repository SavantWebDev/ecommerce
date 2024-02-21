"use client";
import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline, IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import LogoForms from "../../Components/FormsLoginCadastro/logo";
import ButtonForms from "../../Components/FormsLoginCadastro/buttonForms";
import Link from "next/link";
import LoginSocial from "../../Components/FormsLoginCadastro/loginsocial";
import RedirectLoginCadastro from "../../Components/FormsLoginCadastro/redirectLoginCadastro";
import { login, loginVerify } from "../../api/api";
import { useRouter } from "next/navigation";
import Input from "../../Components/InputComponent";

export default function Loginauth() {
  // const [nome, setNome] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [senhaConfirma, setSenhaConfirma] = useState("");
  // Previne a ação padrão de submissão do formulário
  const [check, setChecker] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("check") === "true"
      : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("email");
      const savedSenha = localStorage.getItem("senha");
      if (savedEmail && savedSenha) {
        setEmail(savedEmail);
        setSenha(savedSenha);
        setChecker(true);
      }
    }
  }, []);

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
      const res = await login(email, senha);
      console.log(res);
      var token = res.token;
      console.log(token);
      localStorage.setItem("token", token);
      const resVerify = await loginVerify(localStorage.getItem("token"));
      console.log(token);
      console.log(resVerify);
      router.push("/home");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      alert(error.message);
      router.push("/auth/login");
    }
  }; // Exibe os valores dos inputs no console

  return (
    <section className="flex w-full h-screendv overflow-hidden">
      <div className="bg-login  bg-no-repeat bg-cover bg-center w-[40%] h-auto max-lg:hidden "></div>

      <div className="w-[60%] h-screendv px-8 bg-primaria overflow-auto max-lg:w-full max-sm:px-5 max-sm:py-10">
        <div className="flex max-w-[463px] w-full h-screendv flex-col items-center justify-center mx-auto max-sm:h-auto">
          <LogoForms
            titulo="Bem vindo de volta"
            subtitulo="Coloque suas credenciais para acessar o sistema"
            s
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

            <div className="w-full flex items-center justify-between py-1">
              <div className="flex items-center gap-2 w-1/2">
                <input
                  id="checkLogin"
                  checked={check}
                  onChange={checkVerify}
                  className="w-[19px] h-[19px] border border-[#000] rounded-[4px] "
                  type="checkbox"
                />
                <p className="text-[14px]">lembrar-se de mim</p>
              </div>
              <div className="w-1/2 flex justify-end">
                <Link
                  href=""
                  className="text-[#000] border-b border-solid text-[14px]"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <ButtonForms>Continuar</ButtonForms>
          </form>

          <LoginSocial conect="ou continue com" />
          <RedirectLoginCadastro
            fraseLink="Não tem conta?"
            link="Cadastre-se"
            href="/auth/cadastro"
          />
        </div>
      </div>
    </section>

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
