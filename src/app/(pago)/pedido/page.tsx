"use client"
import { useShop } from "@/hooks/useChomp";
import Image from "next/image";

const Page = () => {
    const { itemCarrito } = useShop()

    return (
        <section className="text-white">
            <div className="flex gap-5">
                {
                    itemCarrito.map((item, index) => (
                        <div key={index} className="w-72 h-96 bg-white/90 text-center relative rounded-sm overflow-hidden">
                            <Image
                                src={`/productos/${item.img}.jpg`}
                                width="400"
                                height="400"
                                alt="Imagen del producto"
                                className="w-full h-60"
                                priority
                            />
                            <h1 className="text-strong text-xl font-medium">{item.nombre}</h1>

                            <div className="absolute bottom-0 left-0text-lg text-strong w-full text-center  p-2">
                                <div className="flex gap-2 w-1/2 justify-between">
                                    <h1 className="text-lg font-medium">Cantidad:</h1>
                                    <span className="text-xl font-bold">{item.cantidad}</span>
                                </div>
                                <div className="flex gap-2 w-1/2 justify-between">
                                    <h1 className="text-lg font-medium">Precio:</h1>
                                    <span className="text-xl font-bold">{item.precio}</span>
                                </div>
                                <div className="flex gap-2 w-1/2 justify-between">
                                    <h1 className="text-lg font-medium">Total:</h1>
                                    <span className="text-xl font-bold">{item.precio * item.cantidad}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Page;
