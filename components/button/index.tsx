"use client";

import { useState } from "react";

export function Button() {
  const [name, setName] = useState("Fernando Sebastião");

  return (
    <div>
      <button onClick={() => setName("Divaldo Hélder")}>Alterar nome</button>
      <p>Nome:{name}</p>
    </div>
  );
}
