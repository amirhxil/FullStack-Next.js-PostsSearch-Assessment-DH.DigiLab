export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
}
