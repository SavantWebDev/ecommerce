import Image from "next/image";
import React from "react";
import Logo2 from "../../../public/images/logo2.svg";
import facebook from "../../../public/images/assets/social/facebook.svg";
import instagram from "../../../public/images/assets/social/instagram.svg";
import linkedin from "../../../public/images/assets/social/linkedin.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primaria w-full flex items-center justify-center">
      <div className="max-w-[1416px] w-full grid grid-cols-2 auto-rows-auto gap-10 py-10 px-5  items-start md:grid-cols-[repeat(5,_minmax(0,_auto))] justify-center md:justify-between md:px-5">
        <div className="flex flex-col lg:w-fit justify-center items-start">
          <h4 className="font-semibold">Categorias</h4>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Cervejas
          </Link>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Wisky
          </Link>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Gin
          </Link>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Vinho
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h4 className="font-semibold">Loja</h4>
          <Link href="#" className="pt-[16px] text-[#766214]">
            Riverside Shopping
          </Link>
          <Link
            href="#"
            className="pt-[16px] max-w-[265px] w-full text-[#766214]"
          >
            Shopping Center Riverside Walk Avenida Ininga, Av. Jóquei Clube -
            Fátima, Teresina
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h4 className="font-semibold">Suporte</h4>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Fale Conosco
          </Link>
          <Link href="#" className="text-[#766214] pt-[16px]">
            Feedback
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <div className="flex flex-col items-start justify-center gap-[10px] mb-10 ">
            <h4 className="font-semibold">Social</h4>
            <div className="flex items-center gap-[10px]">
              <Link href="#">
                <Image
                  src={instagram}
                  width={44}
                  height={44}
                  alt="Instagram Logo"
                />
              </Link>
              <Link href="#">
                <Image
                  src={facebook}
                  width={44}
                  height={44}
                  alt="Facebook Logo"
                />
              </Link>
              <Link href="#">
                <Image
                  src={linkedin}
                  width={44}
                  height={44}
                  alt="Linkedin Logo"
                />
              </Link>
            </div>
          </div>
        </div>
          <Image
            className=" md:w-[223px] md:h-[159px]"
            src={Logo2}
            width={117}
            height={83.442}
            alt="Imagem Logo"
          />
      </div>
    </footer>
  );
}
