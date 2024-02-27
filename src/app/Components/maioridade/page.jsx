export default function Maioridade() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-primaria">
        Você é maior de idade?
      </h1>
      <div className="flex gap-5">
        <button className="bg-primaria text-white py-2 px-5 rounded-[20px]">
          Sim
        </button>
        <button className="bg-primaria text-white py-2 px-5 rounded-[20px]">
          Não
        </button>
      </div>
    </div>
  );
}
