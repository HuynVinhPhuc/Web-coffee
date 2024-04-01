import Header from "@/components/layouts/Header";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import ScrollToTopBtn from "@/components/layouts/ScrollToTopBtn";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalProvider>
          <Header />
          {children}
          <ScrollToTopBtn />
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
