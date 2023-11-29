import Image from "next/image";
import React from "react";
import newimg from "/public/images/newsletter.png";

const Newsletter = () => {
  return (
    <div className="bg-neutral-dark flex justify-evenly items-center">
      <Image className="pt-[41px] hidden lg:block" alt="newleter icon" width={401} height={388} src={newimg} />
      <div className="text-branco w-[479px] py-5 px-5 lg:py-0">
        <h4 className="text-[20px] lg:text-[36px] font-semibold leading-[normal]">
          Entre em nossa Newsletter
        </h4>
        <p className="text-[14px] lg:text-[20px] font-medium leading-normal pt-[11px] pb-[38px]">
          receba nossas ofertas no seu WhatsApp e E-mail e fique antenado no
          menor preço de Teresina
        </p>
        <fieldset className="flex flex-col gap-[11px] pb-[16px] ">
          <input className="rounded-[10px] px-[20px] py-[20px] focus:shadow-none focus:outline-none text-cor-preto" type="email" placeholder="Nome" />
          <input className="rounded-[10px] px-[20px] py-[20px] focus:shadow-none focus:outline-none text-cor-preto" type="tel"  placeholder="Whatsapp"/>
        </fieldset>
        <p className="text-[12px] font-medium leading-[16.86px] text-center w-[300px] my-0 mx-[auto]">
          Ao inserir meus dados, estou de acordo com os termos e condições e
          politica de privacidade
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
