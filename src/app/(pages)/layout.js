import Header from "../Components/Header/header";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/footer";
import { register } from "swiper/element/bundle";
import { Providers } from "../providers";
import { CarrinhoProvider } from "../Components/context/CarrinhoContext.jsx";
import { ModalProvider } from "../Components/context/ModalContext.jsx";
import Maioridade from "../Components/modalMaioridade/maioridade";

// register Swiper custom elements
register();

export default function LayoutPages({ children }) {
  return (
    <Providers>
      <CarrinhoProvider>
        <ModalProvider>
          <Maioridade />
          <Header />

          {children}

          <Newsletter />
          <Footer />
        </ModalProvider>
      </CarrinhoProvider>
    </Providers>
  );
}
