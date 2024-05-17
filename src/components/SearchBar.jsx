export default function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une recette"
      className="mt-8 rounded-md px-2 py-1 shadow-md border border-none focus:outline focus:border-sky-400"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
}
