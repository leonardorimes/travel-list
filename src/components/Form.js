import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [qtd, setQtd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = { desc, qtd, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDesc("");
    setQtd("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>O que você precisa para sua 😍 viagem?</h3>
      <select value={qtd} onChange={(e) => setQtd(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
