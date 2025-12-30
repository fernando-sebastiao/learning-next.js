"use client";

import { useFormStatus } from "react-dom";

export function AddTagButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-gray-400 p-1 text-white rounded-md"
      type="submit"
      disabled={pending}
    >
      {pending ? "carregando..." : "criar tag"}
    </button>
  );
}
