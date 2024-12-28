import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo no es valido")
    .required("El correo es incorrecto"),
  password: Yup.string()
    .min(4, "la contraseña es muy corta")
    .required("La contraseña es incorreca"),
});
