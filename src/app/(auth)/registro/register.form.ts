import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string().min(4, "el correo no es valido").required('El correo es obligatorio'),
  direccion: Yup.string()
    .required("La dirección es obligatoria")
    .min(10, "La dirección debe tener al menos 10 caracteres")
    .matches(
      /^[a-zA-Z0-9\s,.'-]*$/,
      "La dirección contiene caracteres inválidos"
    ),
  password: Yup.string()
    .min(4, "La contraseña es muy corta")
    .required("La contraseña es Obligatoria"),
});
