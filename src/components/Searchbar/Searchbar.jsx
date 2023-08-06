import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type the name of the product or dish here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.inputIcon}>
        <i className={styles.faSearch}></i>
      </button>
    </form>
  );
}

export default Searchbar;
