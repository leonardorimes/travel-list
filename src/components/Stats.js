export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Comece adionando seus itens para sua lista 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Você fez tudo, parabéns ✈"
          : `💼 Você tem ${numItems} itens em sua lista, você já completou ${numPacked}
        (${percentage})% itens`}
      </em>
    </footer>
  );
}
