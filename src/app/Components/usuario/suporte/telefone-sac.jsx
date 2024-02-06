import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

export default function TelefoneSac() {
  const suporteItems = [
    {
      id: 1,
      icon: <IoIosCall className="text-primaria" size={20} />,
      title: "Telefone SAC",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae labore nisi sequi, cum voluptatibus fuga nobis ab temporibus eum saepe eveniet quas unde amet impedit atque fugit odio delectus eligendi.",
      status: "Online",
      telefone: "(86) 349730320",
    },
    {
      id: 1,
      icon: <IoIosCall className="text-primaria" size={20} />,
      title: "Atendimento WhatsApp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae labore nisi sequi, cum voluptatibus fuga nobis ab temporibus eum saepe eveniet quas unde amet impedit atque fugit odio delectus eligendi.",
      status: "Online",
    },

    // Adicione mais itens conforme necessário
  ];
  return (
    <div className="pt-5 flex flex-col gap-2">
      {suporteItems.map((item) => (
        <div
          key={item.id}
          className=" bg-[#f9f9f9] flex justify-between rounded-[10px] items-center px-10 py-5 gap-10"
        >
          <div className="flex flex-col items-start gap-2 w-[60%]">
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="font-bold">{item.title}</span>
            </div>
            <p>{item.description}</p>
          </div>
          <div className="flex flex-col gap-3 w-[40%] ">
            <span className="font-bold">Status</span>
            <span className="text-[green]">{item.status}</span>
            {item.title === "Telefone SAC" ? (
              <span className="font-bold">{item.telefone}</span>
            ) : (
              <Link
                href="#"
                className="bg-[#33b333] flex items-center gap-2 p-2 text-branco font-bold rounded-md "
              >
                <IoIosCall className="text-[#248f24]" size={20} />
                Atendimento WhatsApp
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
