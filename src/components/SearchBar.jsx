import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="p-2 border rounded-l-md w-80 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
