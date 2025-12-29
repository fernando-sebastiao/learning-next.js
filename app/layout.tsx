import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Home - Aula Next Js do zero!",
  description: "Aprendendo Next js do zero com Sujeito Programador",
  openGraph: {
    title: "Aprendendo Next js do zero com Sujeito Programador",
    description: "Aprendendo Next js do zero com Sujeito Programador",
    images: ["imagem de previsualização quando eu partilhar o site"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
