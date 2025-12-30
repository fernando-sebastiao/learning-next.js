import { Suspense } from "react";
import { PostInfo } from "../_components/post";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;

  return (
    <div>
      <h1 className="font-bold text-xl">Detalhes do Post: {id}</h1>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
