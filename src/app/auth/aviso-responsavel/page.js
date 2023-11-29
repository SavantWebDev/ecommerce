import Image from "next/image";
import Link from "next/link";
import Logo2 from "../../../../public/images/logo2.svg";
import check from "../../../../public/images/assets/check.svg";
import mais18 from "../../../../public/images/assets/18.svg";
import closeAviso from "../../../../public/images/assets/close-aviso.svg";
export default function AvisoConsumo() {
  return (
    <section className="flex w-full h-screendv overflow-hidden max-sm:flex-col max-sm:h-full">
      <div className="bg-login bg-no-repeat bg-cover bg-center w-[40%] relative h-auto max-md:hidden">
        <Image
          width={94}
          height={94}
          alt="mais 18"
          src={mais18}
          className="absolute right-0 bottom-0 m-[0_40px_40px_0]"
        />
      </div>

      <div className=" bg-primaria w-[60%] h-screendv  overflow-auto max-md:w-full max-md:text-center max-sm:px-5">
        <div className=" flex px-16 gap-5 pb-32 h-screendv flex-col items-start justify-end max-md:items-center max-md:justify-center max-md:pb-0 max-sm:px-5">
          <Link href="/home">
            <Image
              src={Logo2}
              width={183.73}
              height={131}
              className=""
              alt="Imagem logo"
            />
          </Link>
          <div className="flex flex-col gap-5">
            <h1 className="text-[48px] max-w-[593px] w-full text-[#1A1A1A] leading-tight">
              Nós apoiamos o consumo responsável.
            </h1>
            <p className="text-[18px] font-medium max-w-[593px] w-full leading-[140%]">
              Você possui mais de 18 anos?
            </p>
          </div>
          <div className="mt-[10px] flex items-center gap-5">
            <Link
              className="rounded-[5px] border border-solid border-[#1B1A1A] bg-[#1B1A1A] text-[#FC0] text-center text-[20px] p-[14px_20px] font-semibold leading-normal flex items-center gap-[10px]"
              href="/home"
            >
              Sim
              <Image width={24} height={24} alt="check" src={check} />
            </Link>
            <Link
              className="rounded-[5px] border border-solid border-[#1B1A1A]  text-[#1B1A1A] text-center text-[20px] p-[14px_20px] font-semibold leading-normal flex items-center gap-[10px]"
              href="https://www.ambev.com.br/consumo-responsavel-aviso"
            >
              Não
              <Image width={24} height={24} alt="close" src={closeAviso} />
            </Link>
          </div>
          <div className=" w-full flex justify-center pb-3">
            <Image
              width={94}
              height={94}
              alt="mais 18"
              src={mais18}
              className=" md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
