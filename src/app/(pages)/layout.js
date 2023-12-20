import Header from "../Components/Header/header";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/footer";
import { register } from "swiper/element/bundle";
import { Providers } from "../providers";
import {CarrinhoProvider} from "../Components/context/CarrinhoContext.jsx"

// register Swiper custom elements
register();

export default function LayoutPages({ children }) {
  return (
    <Providers>
      <CarrinhoProvider>
      <Header />
      <main className="w-full h-full xl:max-w-[1416px] 3xl:max-w-[1516px]  xl:mx-auto max-2xl:px-5 ">
        {children}
      </main>
      <Newsletter />
      <Footer />
      </CarrinhoProvider>
    </Providers>
  );
}
