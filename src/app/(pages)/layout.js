import Header from "../Components/Header/header";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/footer";
import { Providers } from "../providers";

export default function LayoutPages({ children }) {
  return (
    <Providers>
      <Header />
      <main className="w-full h-full">{children}</main>
      <Newsletter/>
      <Footer/>
    </Providers>
  );
}
