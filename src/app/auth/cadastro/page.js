import React from "react";
import Input from "@/app/Components/InputComponent";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import LogoForms from "@/app/Components/FormsLoginCadastro/logo";
import ButtonForms from "@/app/Components/FormsLoginCadastro/buttonForms";
import Link from 'next/link'
import LoginSocial from "@/app/Components/FormsLoginCadastro/loginsocial";
import RedirectLoginCadastro from "@/app/Components/FormsLoginCadastro/redirectLoginCadastro";


export default function CadastroAuth(){
  return (     
    <div className=" h-full flex flex-col items-center justify-center">
    <LogoForms
      titulo="Bem vindo de volta"
      subtitulo="Coloque suas credenciais para acessar o sistema"
    />
    <form className="flex w-full flex-col gap-2 " action="">
      <Input
        icone={<CiMail />}
        label="Nome e Sobrenome:"
        obrigatorio={true}
        placeholder="Digite seu nome e sobrenome"
        tipo="email"
      />
      <Input
        icone={<CiMail />}
        label="Digite seu Email:"
        obrigatorio={true}
        placeholder="Email"
        tipo="email"
      />
      <Input
        icone={<IoKeyOutline />}
        label="E-mail"
        obrigatorio={true}
        placeholder="Digite sua senha:"
        tipo="password"
      />
      <Input
        icone={<IoKeyOutline />}
        label="Confirmar senha:"
        obrigatorio={true}
        placeholder="Confirme sua senha"
        tipo="password"
      />

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
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
      <ButtonForms>Cadastrar-se</ButtonForms>
    </form>

    <LoginSocial />
    <RedirectLoginCadastro
      fraseLink="Já possui conta?"
      link="Faça o Login"
      href="/auth/login"
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
