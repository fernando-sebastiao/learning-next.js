"use client";

import { useState } from "react";

export function Button() {
  const [name, setName] = useState("Fernando Sebastião");

  function handleName() {
    setName("Divaldo Hélder");
  }
  return (
    <div>
      <button onClick={handleName}>Alterar nome</button>
      <p>Nome: {name}</p>
    </div>
  );
}
