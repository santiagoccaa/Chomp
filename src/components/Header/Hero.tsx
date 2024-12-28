import Image from "next/image";
import {Navbar} from "./Navbar";
import {NavMobil} from "./NavMovil";

export const Hero = () => {
  return (
    <header className="container mx-auto h-auto md:h-[100vh] flex flex-col items-center gap-4 relative overflow-hidden">
      <Navbar />
      <NavMobil />
      <div className="flex flex-col md:flex-row md:h-[500px] h-auto w-full rounded-lg bg-light gap-y-12 md:gap-0">
        <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-5/6 flex flex-col">
            <h1 className="md:text-5xl text-4xl font-bold text-white/90">
              Come Tu Comida Justo Como{" "}
              <span className="text-text-primary">Te Gusta!</span>
            </h1>
            <p className="text-sm text-white/90 mt-4 w-full md:w-[400px]">
              Disfruta de tus platos favoritos sin salir de casa, pide de manera
              rápida y sencilla y recíbelos en la puerta con solo unos pocos
              clics.
            </p>

            <div className="flex flex-col md:flex-row gap-6 my-12 h-auto p-2">
              <button className="p-2 w-full md:w-40 h-12 bg-primary text-base border-[2px] border-text-primary hover:bg-transparent transition-all duration-300 text-white font-medium shadow-lg rounded-2xl">
                Ordena Ya
              </button>
              <button className="p-2 w-full md:w-40 h-12 bg-transparent border-[2px] border-white text-base text-white font-medium hover:shadow-2xl hover:shadow-white rounded-2xl transition-all duration-30000">
                Ver Menu
              </button>
            </div>
          </div>
        </div>

        {/* Imagen del header */}
        <div className="order-1 w-full md:w-1/2 bg-cover">
          <Image
            width="800"
            height="800"
            priority
            src="/header/hero.png"
            alt="hero"
            className="degradado h-full w-full"
          />
        </div>
      </div>
    </header>
  );
}
