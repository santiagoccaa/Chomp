import Image from "next/image";

interface ImageProps{
  img:string
  width:string
  height:string
}

export const BoxImage = ({ img, width, height }: ImageProps) => {

  return (
    <div
      className={`${height} ${width} rounded-lg shadow-lg shadow-black overflow-hidden`}
    >
      <Image
        width="400"
        height="400"
        src={img}
        className="h-full w-full object-center"
        alt="imagen"
      />
    </div>
  );
}
