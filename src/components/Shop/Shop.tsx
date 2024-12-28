"use client";

import { categorias } from "@/data/categorias";
import { useShop } from "@/hooks/useChomp";

import Image from "next/image";
import { SlRefresh } from "react-icons/sl";
import CardProduct from "./CardProduct";

export const Shop = () => {
    const {
        catalogo,
        filtrarProductos,
        categoriaSeleccionada,
    } = useShop();

    return (
        <div className="container mx-auto h-auto items-center w-full flex flex-col mb-4">
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 md:flex items-center justify-center overflow-hidden mt-4 bg-light rounded-lg">
                    {categorias.map(({ icono, nombre, id }) => (
                        <button
                            onClick={() => filtrarProductos(id)}
                            key={id}
                            className={`text-sm font-bold text-white/90 w-auto md:w-40 flex flex-col items-center justify-center hover:shadow-sm hover:bg-primary duration-300 p-2 px-4 ${id === categoriaSeleccionada ? "bg-primary" : "bg-transparent"
                                }`}
                        >
                            <Image
                                width="200"
                                height="200"
                                className="w-12 h-12"
                                src={`/categorias/icono_${icono}.svg`}
                                alt={nombre}
                                priority
                            />
                            {nombre}
                        </button>
                    ))}
                    <button
                        onClick={() => filtrarProductos(null)}
                        className="text-sm font-bold text-white h-full flex flex-col items-center justify-center hover:shadow-sm hover:bg-primary duration-300 p-2 px-4"
                    >
                        <SlRefresh size={30} />
                        ALL
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full my-8">
                <div className="flex items-center justify-center w-full h-[2px] bg-light">
                    <span className="bg-strong w-auto text-lg font-bold text-white/90 px-4 uppercase">
                        Comida Rapida
                    </span>
                </div>
            </div>

            <div className="w-80 md:w-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll scroll h-[80vh]">
                {catalogo.map(({ id, nombre, img, precio, categoria_id, ingredientes, title }) => (
                    <CardProduct key={id} img={img} nombre={nombre} precio={precio} id={id} categoria_id={categoria_id} ingredientes={ingredientes} title={title} />
                ))}
            </div>
        </div>
    );
}
