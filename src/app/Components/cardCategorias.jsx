import React from "react";
import Link from "next/link";
import ArrowCard from "../Components/arrow.jsx";
import { IoArrowForwardOutline } from "react-icons/io5";
import imagem from "../../../public/images/categorias/category.png"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image.js";

export default function CardCategorias({categoria,cor,corPadrao,home }) {
  return (
    <>
      <Link href={`/categoria-produtos/${categoria}`} key={categoria}>
      
      <Card isBlurred className={ `${home ? 'h-full' : 'h-[253px]'} w-full  group `}>
        <CardHeader className="absolute z-10 bottom-0 flex items-center justify-between px-5">
          <div>
            {/* <p className="text-[16px]  text-[#fff] font-bold">
              {categoria}
            </p> */}
            <h4 className="text-[#fff] font-semibol text-[32px]">{categoria}</h4>
          </div>
          <div
            className={`${corPadrao}  w-[57] h-[57] p-3 rounded-[10px] transition-all duration-800 backdrop-blur-[2px]
   group-hover:rounded-[50%]`}
          >
            <IoArrowForwardOutline
              size={24}
              color={cor}
              className=" group-hover:text-[red]"
            />
          </div>
        </CardHeader>
        <Image
          loading="lazy"
          fill="cover"
          src={imagem}
          alt="NextUI Image with fallback"
          className="object-cover w-full h-full"
        />
      </Card>
      </Link>
    </>
  );
}
