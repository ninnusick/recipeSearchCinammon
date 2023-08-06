import styles from "./RecipeList.module.css";

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map(({ recipe }) => (
        <li key={recipe.label} className={styles.recListLi}>
          <a href={recipe.url} target="_blank" rel="noreferrer noopener"></a>
          <img src={recipe.image} className={styles.recipeItem} />
          <h1 className={styles.recipeLabel}>{recipe.label}</h1>
          <div className={styles.calorieeIngredient}>
            <p className={styles.caloriee}>
              <span className={styles.spanCalIngr}>
                {Math.round(recipe.calories)}{" "}
              </span>
              CALORIES
            </p>
            <p className={styles.ingredientt}>
              <span className={styles.spanCalIngr}>
                {recipe.ingredientLines.length}{" "}
              </span>{" "}
              INGREDIENTS
            </p>
          </div>
          <p className={styles.sourcee}>{recipe.source}</p>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
