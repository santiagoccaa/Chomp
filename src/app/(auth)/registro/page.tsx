"use client";

import { useFormik } from "formik";

import Link from "next/link";
import { registerSchema } from "./register.form";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function RegistroPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      direccion: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-full py-6 z-20">
      <h1 className="my-6 text-5xl text-white/90 uppercase font-medium">
        Registro
      </h1>
      {/* formulario */}
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
      >
        <div className="pb-2 pt-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo"
            className="block w-full p-4 text-lg rounded-sm bg-light"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-text-primary font-medium text-sm  flex items-center gap-2">
              <IoAlertCircleOutline />
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="pb-2 pt-4">
          <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Direccion Ej: Cra. 7 #45-67, Bogotá"
            className="block w-full p-4 text-lg rounded-sm bg-light"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.direccion}
          />
          {formik.touched.direccion && formik.errors.direccion && (
            <div className="text-text-primary font-medium text-sm  flex items-center gap-2">
              <IoAlertCircleOutline />
              {formik.errors.direccion}
            </div>
          )}
        </div>
        <div className="pb-2 pt-4">
          <input
            className="block w-full p-4 text-lg rounded-sm bg-light"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-text-primary font-medium text-sm  flex items-center gap-2">
              <IoAlertCircleOutline />
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="px-4 pb-2 pt-4">
          <button
            type="submit"
            className="uppercase block w-full p-4 text-lg rounded-full border-2 border-text-primary bg-primary hover:bg-transparent focus:outline-none transition-all duration-300"
          >
            crear
          </button>
        </div>

        <div className="px-4 pb-2 pt-8 flex gap-2">
          <h1 className="text-md text-white/90">ya tienes cuenta?</h1>
          <Link
            href="/iniciar"
            className="text-text-primary hover:underline duration-300"
          >
            Inicia Sesion
          </Link>
        </div>
      </form>
    </div>
  );
}
