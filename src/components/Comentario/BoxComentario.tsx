import { BiSolidMessageDetail } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";

export const BoxComentario = () => {
  return (
    <div className="flex w-72 h-60 shadow-xl rounded-xl bg-strong mt-8">
      <div className="m-4">
        <BiSolidMessageDetail color="white" size={35} strokeWidth={1} />
        <p className="text-[12px] text-white my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ullam ratione repellendus atque quidem.
        </p>
        <div className="flex gap-2">
          <TiStarFullOutline color="yellow" size={20} strokeWidth={1} />
          <TiStarFullOutline color="yellow" size={20} strokeWidth={1} />
          <TiStarFullOutline color="yellow" size={20} strokeWidth={1} />
          <TiStarFullOutline color="yellow" size={20} strokeWidth={1} />
          <TiStarFullOutline color="yellow" size={20} strokeWidth={1} />
        </div>

        <div className="flex mt-4 gap-1 items-center">
          <Image
            src="/persona.png"
            width="80"
            height="80"
            alt="icono persona"
            className="w-12 h-12"
          />
          <h1 className="text-sm font-medium text-white/90 mt-1">
            Santiago Contreras
          </h1>
        </div>
      </div>
    </div>
  );
}
