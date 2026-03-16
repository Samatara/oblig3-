import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      onSearch(value);
    } else if (value.length === 0) {
      onSearch("");
    }
  }

  return (
    <search className="search-bar">
      <input
        id="movie-search"
        type="search"
        className="search-bar__input"
        placeholder="Søke etter en film g"
        value={query}
        onChange={handleChange}
      />
    </search>
  );
}
export default SearchBar;