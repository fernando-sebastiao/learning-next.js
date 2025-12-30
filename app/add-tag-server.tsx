import { revalidateTag } from "next/cache";
import { resolve } from "path";
import { AddTagButton } from "./add-tag-button";

export default function AddTagServer() {
  async function handleCreateTag(form: FormData) {
    "use server";
    const slug = form.get("slug");
    if (!slug) return;

    //Um dalay de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await fetch("http://localhost:3333/tags", {
      method: "POST",
      body: JSON.stringify({ slug }),
    });

    revalidateTag("get-tags", "max");
  }
  return (
    <form action={handleCreateTag} method="POST">
      <input
        className="border-2 border-gray-500 rounded-sm m-2"
        type="text"
        name="slug"
        placeholder="Adicione uma tag"
      />
      <AddTagButton />
    </form>
  );
}
