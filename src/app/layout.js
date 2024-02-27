import { Urbanist } from "next/font/google";
import "./globals.css";
import { register } from "swiper/element/bundle";
import { UsuarioProvider } from "./Components/context/UsuarioContext";

register();
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

const urbanist = Urbanist({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Ecommerce NextJS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/images/logo2.svg" sizes="any" />
      <meta
        charSet="utf-8"
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <body className={`${urbanist.variable} font-primary`}>
        <UsuarioProvider>{children}</UsuarioProvider>
      </body>
    </html>
  );
}