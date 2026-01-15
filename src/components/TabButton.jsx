export default function TabButton({ children, onSelect }) {
  console.log("Tab Button Component executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
