import RecipeList from "./components/RecipeList/RecipeList";
import Header from "./components/Header/Header";
import { searchRecipe } from "./service/recipeApi";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchRecipe(query, 1)
      .then((data) => {
        setRecipes(data.hits);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div>
      <Header />
      <ProgressBar
        visible={loading}
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
      <Searchbar onSearch={setQuery} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
