import { Button } from "@/components/button";
import console from "console";
import Link from "next/link";
import { Suspense } from "react";

export interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: string;
}

export interface ResponseProps {
  posts: PostResponse[];
}

//export const revalidate = 60;

//como componentes server não são reactivos, então é aconselhavel utilizar um revalidate, pode ser como a que
//esta dentro do fech, eu exportar uma constante à cima
//da função

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });

  const data: ResponseProps = await response.json();

  console.log(data);

  async function handleFetchPosts() {
    "use server";
    const response = await fetch("https://dummyjson.com/posts");

    const data: ResponseProps = await response.json();

    console.log(data);
  }

  async function handleSearchUser(formData: FormData) {
    "use server";

    const userId = formData.get("userId");
    if (!userId) return;
    console.log(userId);

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);

    const data: PostResponse = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Todos os Posts</h1>
      <Button />
      <button onSubmit={handleFetchPosts} name="userId">
        Buscar Posts
      </button>
      <form className="flex gap-2 my-4" action={handleSearchUser}>
        <input
          type="text"
          placeholder="Id do usuário"
          className="border border-gray-200 p-2 rounded-md"
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2 rounded-xl">
          Buscar usuário
        </button>
      </form>
      <div className="flex flex-col gap-4">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-400 p-4 mx-2 rounded-md">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <p>{post.body}</p>

            <Link
              href={`/posts/${post.id}`}
              className="text-sm bg-blue-600 text-white rounded-xl p-2 mt-3"
            >
              Acessar detalhe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
