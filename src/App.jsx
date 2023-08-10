import RecipeList from "./components/RecipeList/RecipeList";
import Header from "./components/Header/Header";
import { searchRecipe } from "./service/recipeApi";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import Modal from "./components/Modal/Modal";
import styles from "./components/Header/header.module.css";
import Footer from "./components/footer/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //modal
  const [isModalOpen, setModalOpen] = useState(null);

  useEffect(() => {
    setLoading(true);
    searchRecipe(query, 1)
      .then((data) => {
        setRecipes(data.hits);
      })
      .finally(() => setLoading(false));
  }, [query]);

  //modal
  function openModal(recipe) {
    setModalOpen(recipe);
  }

  function closeModal() {
    setModalOpen(null);
  }

  return (
    <div className={styles.appDiv}>
      <Header />
      <ProgressBar
        visible={loading}
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="grey"
        barColor="#b4b4b4"
      />
      <Searchbar onSearch={setQuery} />
      <RecipeList recipes={recipes} onOpen={openModal} />
      {isModalOpen && <Modal recipe={isModalOpen} onClose={closeModal} />}

      <Footer />
    </div>
  );
}

export default App;
