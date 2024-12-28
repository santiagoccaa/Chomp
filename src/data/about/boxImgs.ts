interface BoxImgItem {
    id: number;
    nombre: string;
    color: string;
    descuento: string;
    imagen: string;
  }

export const boxImgs: BoxImgItem[] = [
    {
        id:1,
        nombre:"Hamburguesa",
        descuento: "20%",
        imagen:"/about/cajas/hamburguesa.png",
        color:'#eb0029',
    },
    {
        id:2,
        nombre:"Papitas Fritas",
        descuento: "20%",
        imagen:"/about/cajas/papitas.png",
        color:'#ff9d2e',
    },
    {
        id:3,
        nombre:"Pizza",
        descuento: "20%",
        imagen:"/about/cajas/pizza.png",
        color:'#219554',
    },
]