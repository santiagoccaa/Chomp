import { boxImgs } from "@/data/about/boxImgs";
import { items } from "@/data/about/items";

import { BoxImage } from "./BoxImage";
import { BoxFood } from "./BoxFood";

export const About = () => {
    return (
        <div className="container mx-auto h-auto md:h-screen">
            <div className="md:flex items-center justify-center">
                {/* about DE COMIDA ----------------- */}
                <div className="w-full md:w-1/2 h-auto flex justify-center md:justify-end mt-4">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 w-auto h-96 gap-x-4">
                        <div className="flex flex-col gap-y-2 mx-8 md:mx-0">
                            <BoxImage img="/about/hamburguesa.jpg" width="md:w-60 w-full" height="h-48" />
                            <div className="flex w-full gap-2 justify-between">
                                <BoxImage img="/about/mesa.avif" width="md:w-40 w-full" height="h-44" />
                                <BoxImage img="/about/coca.jpg" width="md:w-16 w-24" height="h-44" />
                            </div>
                        </div>
                        <div className="hidden md:flex md:flex-col justify-center gap-y-2">
                            <BoxImage img="/about/sostiene.avif" width="w-48" height="h-40" />
                            <BoxImage img="/about/pizza.avif" width="w-48" height="h-32" />
                        </div>
                    </div>
                </div>

                {/* INFORMACION ----------------- */}
                <div className="w-full md:w-1/2 justify-center mt-4">
                    <div className="w-11/12 m-4 md:m-0 md:w-96">
                        <h1 className="text-sm font-bold text-primary">
                            Sobre Nosotros
                        </h1>
                        <h1 className="text-xl md:text-xl font-bold text-white">
                            Lorem ipsum dolor sit amet, consectetur.
                        </h1>

                        <p className="text-sm font-light text-gray-200 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                            numquam ipsum quo eius consequatur quae possimus iusto nihil
                            explicabo molestias-
                        </p>

                        <div className="grid grid-cols-3 md:grid-cols-3 max-w-full gap-y-4 mt-8 overflow-hidden">
                            {items.map((item) => {
                                return (
                                    <div key={item.id} className="flex flex-col gap-2">
                                        {item.icon}
                                        <p className=" text-base font-medium text-white/90">
                                            {item.nombre}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <button className="flex items-center px-4 bg-primary border-2 border-primary mt-8 md:mt-14 p-2 text-sm text-white/90 hover:bg-transparent font-medium rounded-full gap-12 shadow-lg duration-300">
                            Saber Mas
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-4 mb-8 w-full h-auto md:h-44 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white">
                {/*------------ Caja de comida ----------------*/}
                {boxImgs.map(({ nombre, color, descuento, imagen, id }) => {
                    return <BoxFood key={id} nombre={nombre} color={color} descuento={descuento} imagen={imagen} />
                })}

            </div>
        </div>
    );
}
