// import { RotatingLines } from "react-loader-spinner";
// import recipeList from "./components/recipeList";
// import Searchbar from "./components/Searchbar";

import { searchRecipe } from "./service/recipeApi";

import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchRecipe(query, 0)
      .then((data) => {
        setRecipes(data.hits);
      })
      .finally(setLoading(false));
  }, [query]);

  return <div>{/* <Searchbar onSearch={setQuery} /> */}</div>;
}

export default App;
