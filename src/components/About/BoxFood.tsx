import Image from "next/image";
import { TbHandClick } from "react-icons/tb";

interface FoodProps {
  nombre: string
  color: string
  descuento: string
  imagen: string
}

export const BoxFood = ({ nombre, color, descuento, imagen }: FoodProps) => {
  return (
    <div
      style={{ background: color }}
      className={`relative overflow-hidden h-32 w-full md:w-80 rounded-lg hover:shadow-lg hover:shadow-primary cursor-pointer duration-300 group`}
    >
      <Image
        src="/about/cajas/hojas.png"
        width="200"
        height="200"
        alt="Hojas decoracion"
        className="absolute -top-1 -left-1 w-16 h-16"
      />
      <div className="h-full absolute top-0 flex items-center justify-center -right-6">
        <Image
          src={imagen}
          width="200"
          height="200"
          alt="Hojas decoracion"
          className=" w-48 h-48 group-hover:rotate-12 duration-500"
        />
      </div>

      <div className="absolute flex flex-col gap-y-2 justify-center left-12 h-full w-4/6">
        <p className="text-xl font-bold uppercase">{nombre}</p>

        <h1 className="text-[13px] font-medium text">
          Obtenla x {descuento} <br />
          <span>pide la tuya</span>
        </h1>

        <button className="text-[15px] w-3/6 transition-all duration-300 font-medium flex gap-2 items-center justify-center">
          Ordenar
          <TbHandClick size={20} />
        </button>
      </div>
    </div>
  );
}
