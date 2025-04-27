import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
