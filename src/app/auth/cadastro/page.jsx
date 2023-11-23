"use client";
import { useState } from "react";
import Input from "../../Components/InputComponent/index";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline, IoEyeSharp } from "react-icons/io5";

import LogoForms from "../../Components/FormsLoginCadastro/logo";
import ButtonForms from "../../Components/FormsLoginCadastro/buttonForms";
import Link from "next/link";
import LoginSocial from "../../Components/FormsLoginCadastro/loginsocial";
import RedirectLoginCadastro from "../../Components/FormsLoginCadastro/redirectLoginCadastro";

import {
  validaCpf,
  validaEmail,
  validaIdade,
  validaNome,
  validaSenha,
} from "./Validacoes";

export default function CadastroAuth() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [idade, setIdade] = useState("");
  const [Cpf, setCpf] = useState("");
  const [isNomeValid, setIsNomeValid] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const [isSenhaValid, setIsSenhaValid] = useState();
  const [isIdadeValid, setIsIdadeValid] = useState();
  const [isCpfValid, setIsCpfValid] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // !isNomeValid || !isEmailValid || !isSenhaValid || !isIdadeValid
    if (!isNomeValid || !isEmailValid || !isIdadeValid || !isCpfValid) {
      console.log("campos invalidos");
      console.log(isNomeValid);
      console.log(isEmailValid);
      // console.log(isSenhaValid)
      console.log(isIdadeValid);
      console.log(isCpfValid);
      return;
    } else {
      console.log("cadastro feito com sucesso");
    }
  };

  return (
    <section className="flex w-full h-screen overflow-hidden">
      <div className="w-[40%] h-auto bg-login bg-no-repeat bg-cover"></div>

      <div className="w-[60%] h-screendv bg-primaria overflow-auto">
        <div className="flex w-full h-auto flex-col items-center justify-center mx-auto py-10">
          <LogoForms
            titulo="Bem vindo de volta"
            subtitulo="Coloque suas credenciais para acessar o sistema"
          />
          <form
            className="flex max-w-[463px] w-full flex-col gap-2"
            onSubmit={handleSubmit}
            action=""
          >
            <Input
              icone={<CiMail />}
              label="Nome e Sobrenome:"
              name="nome"
              obrigatorio={true}
              placeholder="Digite seu nome e sobrenome"
              aoAlterado={(valor) => {
                setNome(valor);
                setIsNomeValid(validaNome(valor));
                console.log(valor);
              }}
            />
            <Input
              icone={<CiMail />}
              label="Digite seu Email:"
              name="email"
              obrigatorio={true}
              placeholder="Email"
              tipo="email"
              aoAlterado={(valor) => {
                setEmail(valor);
                setIsEmailValid(validaEmail(valor));
                console.log(valor);
              }}
            />
            <Input
              icone={<IoKeyOutline />}
              label="Senha"
              name="senha"
              obrigatorio={true}
              placeholder="Digite sua senha:"
              tipo="password"
              aoAlterado={(valor) => {
                setsenha(valor);
                setIsSenhaValid(validaSenha(valor));
                console.log(valor);
              }}
            />
            <Input
              icone={<IoKeyOutline />}
              label="Confirmar senha:"
              name="senha"
              obrigatorio={true}
              placeholder="Confirme sua senha"
              tipo="password"
              aoAlterado={(valor) => {
                setIdade(valor);
                setIsSenhaValid(validaSenha(valor));
                console.log(valor);
              }}
            />
            <Input
              icone={<CiMail />}
              label="Data de Nascimento:"
              name="data"
              tipo="date"
              obrigatorio={true}
              placeholder="Digite sua data de Nascimento"
              aoAlterado={(valor) => {
                setIdade(valor);
                setIsIdadeValid(validaIdade(valor));
                console.log(valor);
              }}
            />
            <Input
              icone={<CiMail />}
              label="CPF:"
              name="cpf"
              tipo="number"
              obrigatorio={true}
              placeholder="Digite seu cpf"
              aoAlterado={(valor) => {
                setCpf(valor);
                setIsCpfValid(validaCpf(valor));
                console.log(valor);
              }}
            />

            <div className="w-full flex items-center my-[21px]">
              <div className="flex items-start gap-2">
                <input
                  className="w-[19px] h-[19px] border border-[#D9D9D9] rounded-[4px]"
                  type="checkbox"
                />
                <p className="text-[14px] text-left">
                  Aceitar{" "}
                  <Link
                    className="font-semibold border-b border-black"
                    href="#"
                  >
                    termos e condições de privacidade.
                  </Link>{" "}
                  Veja nossa{" "}
                  <Link
                    className="font-semibold border-b border-black"
                    href="#"
                  >
                    politica de privacidade.
                  </Link>
                </p>
              </div>
            </div>
            <ButtonForms>Cadastrar-se</ButtonForms>
          </form>

          <LoginSocial />
          <RedirectLoginCadastro
            fraseLink="Já possui conta?"
            link="Faça o Login"
            href="/auth/login"
          />
        </div>
      </div>
    </section>
  );
}
