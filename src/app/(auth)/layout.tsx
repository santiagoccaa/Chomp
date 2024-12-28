import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen relative flex items-stretch text-white">
            <div className="absolute top-4 left-4 flex items-center gap-2 z-50 p-2 px-4 border-2 border-text-primary bg-primary rounded-full hover:bg-transparent duration-300 group">
                <TiArrowBack className="text-3xl" />
                <Link
                    href="/"
                    className="text-2xl font-medium uppercase"
                >
                    Chomp
                </Link>
            </div>
            {/* Sección de la imagen (visible en pantallas grandes) */}
            <div
                className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{
                    backgroundImage: "url(bg.jpg)",
                }}
            >
                <div className="absolute bg-strong opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">
                        Tu antojo, listo en minutos.
                    </h1>
                    <p className="text-3xl my-4">Sabor que te acompaña, donde quieras.</p>
                </div>
                {/* Iconos sociales */}
                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <button>
                        {/* Icono de Twitter */}
                        <FaTwitterSquare className="h-10 w-10" />
                    </button>
                    <button>
                        {/* Icono de Facebook */}
                        <FaFacebookSquare className="h-10 w-10" />
                    </button>
                    <button>
                        {/* Icono de Instagram */}
                        <FaInstagram className="h-10 w-10" />
                    </button>
                </div>
            </div>

            {/* Sección del formulario */}
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-strong ">
                {/* Imagen de fondo para dispositivos móviles */}
                <div
                    className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: "url(/bg.jpg)",
                    }}
                >
                    <div className="absolute bg-strong opacity-60 inset-0 z-0"></div>
                </div>
                {children}
            </div>
        </section>
    );
}
