"use client";

import { FormEvent, useState } from "react";

export default function AddTag() {
  const [slug, setSlug] = useState("");

  async function handleCreateTag(e: FormEvent) {
    e.preventDefault();
    if (!slug) return;
    await fetch("http://localhost:3333/tags", {
      method: "POST",
      body: JSON.stringify({ slug }),
    });
    console.log("slug criado");
  }
  return (
    <form onSubmit={handleCreateTag}>
      <input
        className="border-2 border-gray-500 rounded-sm m-2"
        type="text"
        name="slug"
        placeholder="Slug da tag"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <button className="bg-gray-400 p-1 text-white rounded-md" type="submit">
        criar tag
      </button>
    </form>
  );
}
