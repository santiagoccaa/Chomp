"use client";

import { productos } from "@/data/productos";
import { createContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the context
interface ChomContextType {
  handleClickmodal: () => void;
  modal: boolean;
  handleClickInforProduct: (infoProduct: ProductoItem) => void;
  productSelect: ProductoItem | null;
  handleClickCarrito: () => void;
  carrito: boolean;
  catalogo: Producto[];
  filtrarProductos: (categoria: number | null) => void;
  categoriaSeleccionada: number | null;
  itemCarrito: ItemCarrito[];
  ClickAgregar: (item: ProductoItem) => void;
  ClickEliminar: (id: number) => void;
  productModal: Producto | null;
  handleClickInfoModal: (infoModal: Producto) => void;
  currentStep: number
  handlePrev: () => void
  handleNext: () => void
}

// Define the types for Producto and ItemCarrito
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  ingredientes: string[];
  img: string;
  categoria_id: number;
  title: string;
  [key: string]: any;
}

interface ProductoItem {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  [key: string]: any;
}

interface ItemCarrito extends ProductoItem {
  cantidad: number;
}

// Create context with default value
const ChomContext = createContext<ChomContextType>({
  handleClickmodal: () => { },
  modal: false,
  handleClickInforProduct: () => { },
  productSelect: null,
  handleClickCarrito: () => { },
  carrito: false,
  catalogo: [],
  filtrarProductos: () => { },
  categoriaSeleccionada: null,
  itemCarrito: [],
  ClickAgregar: () => { },
  ClickEliminar: () => { },
  productModal: null,
  handleClickInfoModal: () => { },
  currentStep: 1,
  handlePrev: () => { },
  handleNext: () => { }
});


interface ShopProviderProps {
  children: ReactNode;
}

const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  // ----------- PRODUCTOS -----------------

  const [catalogo, setCatalogo] = useState<Producto[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null);

  useEffect(() => {
    setCatalogo(productos);
  }, []);

  //----------- FILTRAR PRODUCTOS -----------

  const filtrarProductos = (categoria: number | null) => {
    if (categoria !== null) {
      setCatalogo(
        productos.filter((producto) => producto.categoria_id === categoria)
      );
    } else {
      setCatalogo(productos);
    }
    setCategoriaSeleccionada(categoria);
  };

  // Ventana Modal

  const [modal, setModal] = useState<boolean>(false);
  const handleClickmodal = () => {
    setModal(!modal);
  };

  // Obtener la información del producto para mostrar en el Carrito de Compras

  const [productSelect, setProductSelect] = useState<ProductoItem | null>(null);
  const handleClickInforProduct = ({ infoProduct }: ProductoItem) => {
    setProductSelect(infoProduct);
  };

  // Obtener la información del producto para mostrar en el modal
  const [productModal, setProductModal] = useState<Producto | null>(null);
  const handleClickInfoModal = (infoModal: Producto) => {
    setProductModal(infoModal);
  };

  // Abrir carrito de compras

  const [carrito, setCarrito] = useState<boolean>(false);

  const handleClickCarrito = () => {
    setCarrito(!carrito);
  };

  // --------- AGREGAR PRODUCTO A LA PETICION

  const [itemCarrito, setItemCarrito] = useState<ItemCarrito[]>([]);

  const ClickAgregar = (item: ProductoItem) => {
    setItemCarrito((prevItems) => {
      const existingItem = prevItems.find((x) => x.id === item.id);
      if (existingItem) {
        return prevItems.map((x) =>
          x.id === item.id ? { ...x, cantidad: x.cantidad + 1 } : x
        );
      } else {
        return [...prevItems, { ...item, cantidad: 1 }];
      }
    });
  };

  //------- ELIMINAR PRODUCTO DEL CARRITO

  const ClickEliminar = (id: number) => {
    setItemCarrito((prevItems) => {
      const existingItem = prevItems.find((x) => x.id === id);
      if (existingItem && existingItem.cantidad > 1) {
        return prevItems.map((x) =>
          x.id === id ? { ...x, cantidad: x.cantidad - 1 } : x
        );
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  //-------- MANEJO DEL STEPS EN EL PEDIDO
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  //-----------------------------------------------------------------------------------------

  return (
    <ChomContext.Provider
      value={{
        handlePrev,
        handleNext,
        currentStep,
        handleClickmodal,
        modal,
        handleClickInforProduct,
        productSelect,
        handleClickCarrito,
        carrito,
        catalogo,
        filtrarProductos,
        categoriaSeleccionada,
        itemCarrito,
        ClickAgregar,
        ClickEliminar,
        productModal,
        handleClickInfoModal
      }}
    >
      {children}
    </ChomContext.Provider>
  );
};

export { ShopProvider };
export default ChomContext;