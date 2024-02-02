import Image from "next/image";
import React from "react";
import copo from "../../../../public/images/beer-outline.svg";
import tags from "../../../../public/images/assets/pricetags-outline.svg"
import CarrosselFidelidade from "../../Components/CarroselFIdelidade";
import ModalFidelidade from "../../Components/Modal/ModalFidelidade";

const Fidelidade = () => {
  
  return (
    <>
      <div
        className=" max-w-[100vw] w-full mb-10"
        style={{ position: "relative", left: 0, right: 0 }}
      >
        <div
          className=" w-full min-h-[229px] bg-cover bg-center bg-no-repeat inline-flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(251, 254, 255, 0) 16%, rgba(0, 0, 0, 0.993) 23%), url(/images/Banner-fidelidade.jpg)`,
          }}
        >
            <div className="flex justify-center items-center gap-[3.5rem] w-full pl-[11rem] ">
            <div className="text-branco ">
              <h1 className="text-[36px] font-semibold max-w-[473px] leading-[normal]">
                Use seus pontos pra economizar no dia a dia!
              </h1>
              <p className="font-semibold leading-[140%] text-cinza-claro mt-[10px]  max-w-[359px]">
                Seus pontos valem dinheiro, produtos de casa, vouchers do iFood,
                Uber e muito mais.
              </p>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <Image
                    src={copo}
                    width={96}
                    height={96}
                    alt="Copo de cerveja na cor amarela"
                    />
                </div>
                <div className="text-branco">
                    <p className="text-[20px]">Você possui</p>
                    <p><span className="text-[32px] font-semibold">3500 ml’s </span>de Chopp</p>
                    <button className="bg-[#339500] font-bold px-5 py-[10px] rounded-[5px] mt-5">Resgatar produtos</button>
                </div>
            </div>
          </div>
        </div>
    
        <div className="flex justify-center items-center py-3 bg-primaria">
          <p className="text-sm font-medium leading-[140%]">
            <span className="font-bold">
              Quer saber quantos pontos você tem na conta?
            </span>{" "}
            É só clicar em “fazer login” na parte superior dessa página que o
            seu saldo vai aparecer no mesmo lugar.
          </p>
        </div>
      </div>
      <section className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5 ">
        <div className="flex items-center gap-5">
          <Image
          src={tags} 
          width={24}
          height={24}
          alt="icone pricetags"
          />
          <h3 className="text-2xl font-bold leading-[140%]">Mais Promoções</h3>
        </div>
        <CarrosselFidelidade/>
      </section>
      <ModalFidelidade/>
    </>
  );
};

export default Fidelidade;
