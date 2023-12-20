"use client";
import { useState } from "react";

import { CiMail } from "react-icons/ci";
import { IoKeyOutline, IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import LogoForms from "../../Components/FormsLoginCadastro/logo";
import ButtonForms from "../../Components/FormsLoginCadastro/buttonForms";
import Link from "next/link";
import LoginSocial from "../../Components/FormsLoginCadastro/loginsocial";
import RedirectLoginCadastro from "../../Components/FormsLoginCadastro/redirectLoginCadastro";
import valido from "../../../../public/images/assets/verificado.svg";
import erro from "../../../../public/images/assets/erro.svg";

import {
  validaCpf,
  validaEmail,
  validaIdade,
  validaNome,
  validaSenha,
} from "./Validacoes";
import { cadastro } from "../../api/api";
import Image from "next/image";
import { MaskCpf, MaskTelefone } from "./Mascaras";

export default function CadastroAuth() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfirmaSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [Cpf, setCpf] = useState("");
  const [notificacoes, setNotificacoes] = useState("");
  const [numero, setNumero] = useState("");
  const [isNomeValid, setIsNomeValid] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const [isSenhaValid, setIsSenhaValid] = useState();
  const [isIdadeValid, setIsIdadeValid] = useState();
  const [isCpfValid, setIsCpfValid] = useState();
  const [isNotificacoesValid, setIsNotificacoesValid] = useState();
  const [isNumeroValid, setIsNumeroValid] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // validaSenha(senha,confirmasenha)
    // !isNomeValid || !isEmailValid || !isSenhaValid || !isIdadeValid
    if (
      !isNomeValid ||
      !isEmailValid ||
      !isNumeroValid ||
      !isSenhaValid ||
      !isIdadeValid ||
      !isCpfValid ||
      !isNotificacoesValid
    ) {
      console.log("campos invalidos");
      console.log(isNomeValid);
      console.log(isEmailValid);
      console.log(isSenhaValid);
      console.log(isIdadeValid);
      console.log(isCpfValid);
      console.log(isNotificacoesValid);
      return;
    } else {
      console.log("nome: " + nome);
      console.log("email: " + email);
      console.log("senha :" + senha);
      console.log("idade:" + idade);
      console.log("Cpf :" + Cpf);
      console.log("notificacoes:" + notificacoes);
      console.log("numero:" + numero);
      cadastro(nome, email, senha, idade, Cpf, notificacoes, numero);
    }
  };

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const aoEsconderSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  function inputValueNome(event) {
    const valor = event.target.value;
    setNome(valor);
    setIsNomeValid(validaNome(valor));
  }

  function inputValueEmail(event) {
    const valor = event.target.value;
    setEmail(valor);
    setIsEmailValid(validaEmail(valor));
  }

  function inputValueSenha(event) {
    const valor = event.target.value;
    setSenha(valor);
    // setIsSenhaValid(validaEmail(valor));
  }

  function inputValueConfirmaSenha(event) {
    const valor = event.target.value;
    setConfirmaSenha(valor);
    // setIsSenhaValid(validaEmail(valor));
  }

  function validaSenha(senha, confirmaSenha) {
    if (senha === confirmaSenha) {
      setIsSenhaValid(true);
    } else {
      setIsSenhaValid(false);
    }
  }

  function inputValueIdade(event) {
    const valor = event.target.value;
    setIdade(valor);
    setIsIdadeValid(validaIdade(valor));
  }

  function inputValueCpf(event) {
    const valor = event.target.value;
    // valor = valor.replace(/\D/g, "");
    console.log(MaskCpf(valor));
    setCpf(MaskCpf(valor));
    setIsCpfValid(validaCpf(valor));
  }

  function inputNotificacoes(event) {
    const valor = event.target.checked;
    setNotificacoes(valor);
    setIsNotificacoesValid(valor);
  }

  function inputNumero(event) {
    const valor = event.target.value;
    setNumero(MaskTelefone(valor));
    setIsNumeroValid(valor);
  }

  //  const revelaNome = () => {
  //   console.log(isNomeValid)
  //  }

  return (
    <section className="flex w-full h-screendv overflow-hidden">
      <div className="w-[40%] h-auto bg-login bg-no-repeat bg-cover max-lg:hidden"></div>

      <div className="w-[60%] h-screendv bg-primaria overflow-auto py-10 max-lg:w-full max-sm:px-5">
        <div className="flex max-w-[463px] w-full h-auto flex-col items-center justify-center mx-auto">
          <LogoForms
            titulo="Bem vindo de volta"
            subtitulo="Coloque suas credenciais para acessar o sistema"
          />
          <form
            className="flex max-w-[463px] w-full flex-col gap-2"
            onSubmit={handleSubmit}
            action=""
          >
            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <CiMail />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777]">
                  Nome e Sobrenome:
                </label>
                <input
                  onChange={(evento) => {
                    inputValueNome(evento);
                    console.log(evento.target.value);
                  }}
                  type="text"
                  name="nome"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  placeholder="Digite seu nome e sobrenome"
                  required
                />
                <span className="absolute right-0">
                  {isNomeValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isNomeValid === false ? (
                    <Image
                      className="text-[54px]"
                      src={erro}
                      alt="Ícone de erro"
                    />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <CiMail />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777]">
                  Whatsapp:
                </label>
                <input
                value={numero}
                  onChange={(evento) => {
                    inputNumero(evento);
                    console.log(evento.target.value);
                  }}
                  type="tel"
                  name="whatsapp"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  placeholder="Digite seu numero do Whatsapp"
                  maxLength={15}
                  required
                />
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <CiMail />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777]">
                  Email:
                </label>
                <input
                  onChange={(evento) => {
                    inputValueEmail(evento);
                    console.log(evento.target.value);
                  }}
                  type="email"
                  name="email"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  placeholder="Digite seu email"
                  required
                />
                <span className="absolute right-0">
                  {isEmailValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isEmailValid === false ? (
                    <Image src={erro} alt="Ícone de erro" />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <IoKeyOutline />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777]">
                  Senha:
                </label>
                <input
                  onChange={(evento) => {
                    inputValueSenha(evento);
                    validaSenha(evento.target.value, confirmasenha);
                    console.log(evento.target.value);
                  }}
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  placeholder="Digite sua senha"
                  required
                />
                <span className="absolute right-0" onClick={aoEsconderSenha}>
                  {mostrarSenha ? <FaEyeSlash /> : <IoEyeSharp />}
                </span>
                <span className="absolute right-6">
                  {isSenhaValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isSenhaValid === false ? (
                    <Image src={erro} alt="Ícone de erro" />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <IoKeyOutline />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777]">
                  Confirmar Senha:
                </label>
                <input
                  onChange={(evento) => {
                    inputValueConfirmaSenha(evento);
                    validaSenha(senha, evento.target.value);
                    console.log(evento.target.value);
                  }}
                  // onBlur={() => validaSenha(senha, confirmasenha)}
                  type={mostrarSenha ? "text" : "password"}
                  name="password confirm"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  placeholder="Digite sua senha"
                  required
                />
                <span className="absolute right-0" onClick={aoEsconderSenha}>
                  {mostrarSenha ? <FaEyeSlash /> : <IoEyeSharp />}
                </span>
                <span className="absolute right-6">
                  {isSenhaValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isSenhaValid === false ? (
                    <Image src={erro} alt="Ícone de erro" />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <CiMail />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777] whitespace-nowrap">
                  Data de Nascimento:
                </label>
                <input
                  onChange={(evento) => {
                    inputValueIdade(evento);
                    console.log(evento.target.value);
                  }}
                  type="date"
                  name="data"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  required
                />
                <span className="absolute right-6 top-[30px] flex justify-center items-center">
                  {isIdadeValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isIdadeValid === false ? (
                    <Image src={erro} alt="Ícone de erro" />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full mx-auto gap-4 bg-[#FFF] fill-[#FFF] opacity-[0.8] py-0 px-3 border border-solid border-[#D9D9D9] rounded-xl">
              <div className="text-[24px]">
                <CiMail />
              </div>
              <div className="flex flex-col justify-center w-full py-2 relative">
                <label className="text-[12px] w-40 opacity-[1] font-semibold text-[#797777] whitespace-nowrap">
                  CPF:
                </label>
                <input
                  value={Cpf}
                  onChange={(evento) => {
                    inputValueCpf(evento);
                    console.log(evento.target.value);
                  }}
                  type="text"
                  name="cpf"
                  className="text-[16px] bg-[#FFF] text-[#000000] border-none py-1 w-full font-semibold
                  focus:shadow-none focus:outline-none placeholder:text-[14px] placeholder:font-normal"
                  required
                  placeholder="Digite seu CPF"
                  minLength="11"
                  maxLength="14"
                />
                <span className="absolute right-6 top-[30px]">
                  {isCpfValid === true ? (
                    <Image src={valido} alt="Ícone de sucesso" />
                  ) : isCpfValid === false ? (
                    <Image src={erro} alt="Ícone de erro" />
                  ) : null}
                </span>
              </div>
            </div>

            <div className="w-full flex items-center mt-[21px]">
              <div className="flex items-start gap-2">
                <input
                  className="w-[19px] h-[19px] border border-[#000] rounded-[4px]"
                  type="checkbox"
                />
                <p className="text-[14px] text-left">
                  Aceitar
                  <Link
                    className="font-semibold border-b border-black"
                    href="#"
                  >
                    {" "}
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
            <div className="w-full flex items-center mb-[21px] mt-3">
              <div className="flex items-start gap-2">
                <input
                  className="w-[19px] h-[19px] border border-[#000] rounded-[4px]"
                  type="checkbox"
                  onClick={(evento) => {
                    inputNotificacoes(evento);
                    console.log(evento.target.checked);
                  }}
                />
                <p className="text-[14px] text-left">
                  Aceito receber promoções e ações de publicidade
                </p>
              </div>
            </div>

            <ButtonForms>Cadastrar-se</ButtonForms>
          </form>

          <LoginSocial conect="ou cadastre-se com" />
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
