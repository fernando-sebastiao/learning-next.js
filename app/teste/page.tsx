"use client";

import { useEffect, useState } from "react";
import { ResponseProps } from "../posts/page";

export default function PageTeste() {
  const [post, setPosts] = useState<ResponseProps[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-2xl">
        Página Client
      </h1>
      <button
        onClick={() => alert("Foi clicado!")}
        className="text-white bg-black items-center justify-center p-4 rounded-xl m-5"
      >
        Clicar
      </button>
      <div className="flex flex-col mx-2 gap-4">
        {post.map((post: any) => (
          <div key={post.id} className="bg-gray-400 p-4 mx-2 rounded-md">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
