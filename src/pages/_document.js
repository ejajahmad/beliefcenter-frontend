import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
