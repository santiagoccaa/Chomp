import Image from "next/image";

export const Contact = () => {
  return (
    <div className="relative h-auto md:h-[450px]">
      <div className="h-96 md:h-full w-full">
        <Image
          src="/comida.jpg"
          width="500"
          height="500"
          alt="Comida"
          className="h-full w-full md:w-2/6"
        />
      </div>

      <div className="absolute md:top-16 md:left-4 left-4 top-12 mx-4 md:mx-0 flex flex-col items-center md:h-[350px] md:w-[400px] w-80 h-80 bg-light rounded-lg opacity-70 shadow-xl"></div>

      <div className="absolute md:top-16 md:left-4 left-0 top-12 mx-4 md:mx-0 flex flex-col items-center md:h-[350px] md:w-[400px] w-80 h-96 bg-transparent rounded-lg">
        <h1 className="text-white font-medium text-xl mt-4">Horario</h1>
        <span className="w-5/6 h-[1px] bg-primary mt-2"></span>

        <div className="w-auto md:w-5/6 mt-4 flex flex-col justify-center items-center text-white/90 text-lg font-bold h-32 md:h-40">
          <h1>Todos los Dias</h1>
          <h2>08:00 am - 12:00 pm</h2>
        </div>

        <h1 className="text-white font-medium text-xl mt-4">
          Linea de Atencion
        </h1>
        <span className="w-5/6 h-[1px] bg-primary mt-2"></span>
        <h1 className="text-white/90 font-medium text-lg mt-2">
          (+57) 316 7264 847
        </h1>
      </div>

      {/* Reserva de una mesa */}
      <div className="md:absolute top-8 right-32 mx-6 md:mx-0 md:w-3/6 h-auto flex flex-col items-center text-center">
        <h1 className="text-white/90 font-medium text-lg mt-8 md:mt-0">
          Reserva Una Mesa <span className="text-text-primary"> Ahora</span>
        </h1>
        <p className="text-sm font-extralight text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
          eligendi, sit, repellendus commodi quo aperiam consequatur.
        </p>

        <div className="w-full flex flex-col md:flex-row justify-center  gap-4 mt-8">
          <input
            type="text"
            className="rounded-2xl p-2 bg-transparent border-2 outline-none border-primary text-white text-sm font-light"
            placeholder="Nombre..."
          />
          <input
            type="date"
            className="rounded-2xl p-2 bg-transparent border-2 outline-none border-primary text-white text-sm font-light"
          />
          <input
            type="text"
            className="rounded-2xl p-2 bg-transparent border-2 outline-none border-primary text-white text-sm font-light"
            placeholder="Numero Telefonico"
          />
        </div>

        <textarea className="mt-4 outline-none p-2 bg-transparent border-2 border-primary rounded-lg w-full h-32  text-white/90 text-sm font-light" placeholder="Motivo por el cual busca reservar una de nuestras mesas"></textarea>

        <button className="p-2 mt-8 mb-4 mmd:mb-0 text-white/90 text-sm border-2 border-primary bg-primary hover:shadow-lg hover:shadow-red-700 hover:bg-transparent duration-300 rounded-2xl px-4 font-bold">
          Enviar Peticion
        </button>
      </div>
    </div>
  );
}
