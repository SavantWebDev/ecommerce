"use client";

import { MdModeEdit, MdOutlineMail } from "react-icons/md";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import userSvg from "../../../../public/images/assets/user.svg";
import Image from "next/image";
export default function PerfilUser({
  onFileChange,
  email,
  username,
  userImg,
  perfil,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
    onFileChange(e.target.files[0]); // Passa o arquivo selecionado para a função pai
  }
  useEffect(() => {
    if (perfil) {
      setLoading(false);
    }
  }, [userImg, email, username, perfil]);

  // useEffect(() => {

  //   // async function userPerfil() {
  //   //   const pUser = await perfilUser(token);
  //   //   console.log(pUser);
  //   //   setPerfil(pUser);
  //   //   setLoading(false);
  //   // }
  //   // userPerfil();
  // }, [perfil]);

  return (
    <>
      <div className="bg-primaria flex flex-col rounded-[20px] px-10 py-5">
        {loading ? (
          <div className="animate-pulse flex items-center gap-5">
            <div
              className="rounded-full bg-[#d4b021]"
              style={{ width: "139px", height: "139px" }}
            />
            <div className="flex flex-col items-start">
              <div className="font-bold leading-[140%] text-[24px] h-6 bg-[#d4b021] rounded-xl w-40 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-6 bg-[#d4b021] rounded-xl w-40"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-5 w-full max-mn:flex-wrap max-mn:justify-center max-mn:gap-1">
            {/* {pathname === "/usuario/meus-dados" ? (
              <form
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const foto = document.querySelector("input[type=file]");
                  const file = foto.files[0];
                  FotoUsuario({
                    file: file,
                    username: username,
                    celular: celular,
                  });
                }}
              >
                <label
                  className="flex flex-col items-center justify-center gap-2"
                  htmlFor="foto"
                >
                  <input
                    className="hidden max-w-[139px]"
                    type="file"
                    name="foto"
                    id="foto"
                  />
                  <div
                    className=""
                    style={{
                      backgroundImage: `url(${userImg})`,
                    }}
                  ></div>
                </label>
                <button type="submit">Mandar foto</button>
              </form>
            ) : ( */}
            <label
              className="flex flex-col items-center justify-center gap-2 relative"
              htmlFor="foto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <input
                className="hidden max-w-[139px]"
                type="file"
                name="foto"
                id="foto"
                onChange={handleFileChange}
              />

              <div
                className="w-[139px] h-[139px] rounded-full bg-[#d4b021] bg-cover bg-center bg-no-repeat "
                // style={{
                //   backgroundImage: `url(${
                //     selectedFile ? URL.createObjectURL(selectedFile) : userImg
                //   })`,
                // }}
              >
                <Image
                  className="w-full rounded-full bg-[#d4b021] object-cover"
                  src={
                    selectedFile ? URL.createObjectURL(selectedFile) : userImg
                  }
                  fill="cover"
                  alt="usuario"
                />
              </div>
              {isHovered && (
                <div className="absolute cursor-pointer bg-cor-preto w-[139px] h-[139px] rounded-full opacity-75 flex items-center justify-center ">
                  <MdModeEdit size={25} color="white" />
                </div>
              )}
            </label>

            {/* <input className="" type="file" name="foto" id="" />
            <Image
              src={perfil?.usuario?.imageProfile || loading}
              loading="lazy"
              alt="Usuario"
              width={139}
              height={139}
              className="rounded-full max-mn:max-w-[80px] "
            /> */}
            <div className="flex flex-col items-start max-mn:items-center max-mn:justify-center w-full">
              <span className="font-bold leading-[140%] text-[24px] ">
                Bem vindo, {username}.
              </span>
              <div className="flex items-center   gap-2  ">
                <MdOutlineMail />
                <span className="w-full"> {email}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
