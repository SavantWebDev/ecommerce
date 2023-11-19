import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import Input from "../InputComponent";



 
export default function Formulario(){
   return (
    <section className="flex justify-center my-80 bg-[#f2f2f2] p-8">
    <form className="max-w-[80%] bg-[##f2f2f2] text-[#000000] p-[36px] flex flex-col 
      shadow-[0_8px_8pxpx_-16px_rgba(0,0,0,0.8)] gap-2">
      <Input 
        icone={<CiMail />}
        label="Nome e Sobrenome"
        obrigatorio={true}
        placeholder="Digite seu Nome e Sobrenome"
      />
      <Input 
        icone={<CiMail />}
        label="E-mail"
        obrigatorio={true}
        placeholder="Digite seu email"
        tipo='email'
      />
      <Input 
        icone={<IoKeyOutline />}
        label="Senha"
        obrigatorio={true}
        placeholder="Digite sua senha"
        tipo='password'
      />
      <Input 
        icone={<IoKeyOutline />}
        label="Confirmar Senha"
        obrigatorio={true}
        placeholder="Confirmar Senha"
        tipo='password'
      />
    </form>
  </section>
   )
 }
 
