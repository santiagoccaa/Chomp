"use client";

import { useFormik } from "formik";
import { loginSchema } from "./login.form";

import { IoAlertCircleOutline } from "react-icons/io5";

import Link from "next/link";

export default function InicioPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-full py-6 z-20">
      <h1 className="my-6 text-5xl text-white/90 uppercase font-medium">
        Login
      </h1>
      {/* formulario */}
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
      >
        <div className="pb-2 pt-4 flex flex-col items-start">
          <input
            className="block w-full p-4 text-lg rounded-sm bg-light"
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Correo"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-text-primary font-medium text-sm  flex items-center gap-2">
              <IoAlertCircleOutline />
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="pb-2 pt-4 flex flex-col items-start">
          <input
            className="block w-full p-4 text-lg rounded-sm bg-light"
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Contraseña"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-text-primary font-medium text-sm flex items-center gap-2">
              <IoAlertCircleOutline /> {formik.errors.password}
            </div>
          )}
        </div>
        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
          <a href="#">Olvidaste tu contraseña?</a>
        </div>
        <div className="px-4 pb-2 pt-4">
          <button
            type="submit"
            className="uppercase block w-full p-4 text-lg rounded-full border-2 border-text-primary bg-primary hover:bg-transparent focus:outline-none transition-all duration-300"
          >
            Ingresar
          </button>
        </div>

        <div className="px-4 pb-2 pt-8 flex gap-2">
          <h1 className="text-md text-white/90">No tienes cuenta?</h1>
          <Link
            href="/registro"
            className="text-text-primary hover:underline duration-300"
          >
            Crea una
          </Link>
        </div>
      </form>
    </div>
  );
}
