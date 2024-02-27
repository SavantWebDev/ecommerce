import MenuUsuario from "@/app/Components/usuario/menuUsuario";
import PerfilUser from "@/app/Components/usuario/perfil";

export default function LayoutUsuario({ children }) {
  return (
    <main className="w-full h-full  bg-[#F2F3F4] max-xl:px-[10px]  ">
      <section className="flex justify-center items-start gap-10 py-10">
        <MenuUsuario />

        <div className="max-w-[775px] w-full ">{children}</div>
      </section>
    </main>
  );
}
