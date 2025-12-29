import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center my-10 min-h-screen">
      <h1 className="font-bold text-3xl">Página 404 não encontrada</h1>
      <p>Essa página que tentou acessar não existe</p>

      <Link href="/">Voltar para home</Link>
    </div>
  );
}
