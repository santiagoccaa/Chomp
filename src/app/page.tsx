import { About, Carrito, Categoria, Comentario, Contact, Footer, Hero, Ofert, OpenModal, Shop, VerCarrito } from "@/components/";


export default function Home() {
  return (
    <>
      <OpenModal />
      <Carrito />
      <VerCarrito />
      <Hero />
      <Categoria />
      <About />
      <Shop />
      <Ofert />
      <Contact />
      <Comentario />
      <Footer />
    </>
  );
}
