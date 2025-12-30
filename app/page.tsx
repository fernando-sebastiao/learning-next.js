import { Metadata } from "next";
import Tags from "./tags";
import AddTagServer from "./add-tag-server";
import { Suspense } from "react";

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

export const revalidate = 60;
export default function Home() {
  const randomNumber = Math.random() * 10;

  return (
    // <div>
    //   <h1>Página Home</h1>
    //   <h2>Numero gerado: {randomNumber}</h2>
    // </div>
    <div>
      <Suspense
        fallback={
          <h1 className="text-xl font-bold text-black">Carrengando...</h1>
        }
      >
        <Tags />
      </Suspense>
      <AddTagServer />
    </div>
  );
}
