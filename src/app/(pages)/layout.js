import Header from "../Components/Header/header";
import { Providers } from "../providers";

export default function LayoutPages({ children }) {
  return (
    <Providers>
      <Header />
      <main className="h-screendv ">{children}</main>
    </Providers>
  );
}
