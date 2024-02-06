// import Image from "next/image";
// import React from "react";
// import banner from "/public/images/Banner-categoria.svg";
// import banner2 from "/public/images/image72.png";
// import { FaListUl } from "react-icons/fa";
// import { LuLayoutGrid } from "react-icons/lu";
// import Cards from "../../Components/CardsProdutos";
// import Newsletter from "../../Components/Newsletter";
// import { Pagination } from "@nextui-org/react";
// import Pagvaipegar from "../../Components/Pagination";
// import { useParams } from "next/navigation";


// async function page(){
//   const id = useParams.id


//   return (
//     <section className="px-[10.7rem] pt-10">
//       <div className="bg-teste bg-cover bg-no-repeat bg-center min-h-[253px] h-full max-w-full w-[1519px] rounded-[15px] "></div>
//       {/* <Image className='max-w-full w-[1519px] h-[253px]' src={banner2} alt=''/> */}
//       {/* Header pagina */}
//       <div className="flex justify-between items-center text-cor-preto mt-[50px]">
//         <h3 className="text-[24px] font-semibold leading-[normal]">Vodka</h3>
//         <div className="flex justify-around gap-[2.75rem] items-center">
//           <div className="flex items-center gap-[1rem]">
//             <span className="text-[32px] text-cinza cursor-pointer">
//               <FaListUl />
//             </span>
//             <span className="text-[32px] text-primaria cursor-pointer">
//               <LuLayoutGrid />
//             </span>
//           </div>
//           <p className="flex flex-col text-cinza text-[16px] leading-[normal]">
//             Resultados:
//             <span className="text-cor-preto text-[24px] font-semibold leading-[normal]">
//               115 itens
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* cards produtos */}
//       <section className="mt-[30px]">
//         <div className="flex gap-[1.25rem] mb-[1.25rem]">
//           <button className="text-cor-preto bg-primaria px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]">
//             Recomendados
//           </button>
//           <button className="text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]">
//             Entrega grátis
//           </button>
//           <button className="text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]">
//             Mais Vendidos
//           </button>
//           <button className="text-cinza px-[1.25rem] py-[0.625rem] font-semibold leading-[22px] rounded-[40px]">
//             Promoções
//           </button>
//         </div>
//         <div className="mt-[1.25rem] flex gap-[60px] flex-wrap">
//           <Cards
//             imagem={"/images/Produtos/image 73.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 73.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             // promoQtd="Compre 3 leve 1"
//             promoNovo="Novo"
//             promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 27.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             // promoQtd="Compre 3 leve 1"
//             promoNovo="Novo"
//             promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 28.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 42.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 43.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 44.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 45.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 42.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 43.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 44.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 45.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 42.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 43.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 44.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//           <Cards
//             imagem={"/images/Produtos/image 45.png"}
//             nome="Whisky Johnnie Walker Green Label 750 ml"
//             promoQtd="Compre 3 leve 1"
//             // promoNovo="Novo"
//             // promoValor="R$ 55,00 a partir de 6 un."
//             a="R$ 50,00"
//             valor="R$ 50,00 no pix"
//             parcelas="até 4x sem juros"
//           />
//         </div>
//         <div className="flex justify-center pt-[80px] pb-[120px] items-center">
//           {/* <Pagination
//             key={variants}
//             total={10}
//             initialPage={1}
//             color={color}
//             variant={variants}
//           /> */}
//           <Pagvaipegar/>
//         </div>
//       </section>
//       <Newsletter />
//     </section>
//   );
// };

// export default page;
