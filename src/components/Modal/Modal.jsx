import styles from "./Modal.module.css";

function Modal({ recipe, onClose }) {
  function overlayClick(e) {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.target === e.currentTarget) onClose();
  }
  return (
    <div className={styles.Overlay} onClick={overlayClick}>
      <div className={styles.Modal}>
        <div className={styles.imgLabel}>
          <img className={styles.imgMo} src={recipe.image} />
          <div className={styles.labelSaveSourceDiv}>
            <h1 className={styles.recipeLabelMo}>{recipe.label}</h1>
            <a
              className={styles.recipeUrlMo}
              href={recipe.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              See full recipe on:
              <span className={styles.recipeSourceSp}>{recipe.source}</span>
            </a>

            <button className={styles.saveBut}>
              Save
              {/* <a className={styles.saveP}>Save</a> */}
              <img className={styles.saveI} src="/save.png" alt="" />
            </button>
          </div>
        </div>

        <div className={styles.ingrNutrDiv}>
          <div className={styles.ingrDiv}>
            <h1 className={styles.ingrNutrH1Mo}>
              <span className={styles.spanCalIngrMo}>
                {recipe.ingredientLines.length}{" "}
              </span>{" "}
              INGREDIENTS <hr />
            </h1>

            <ul className={styles.ingridientsMo}>
              {recipe.ingredientLines.map((ingredient) => (
                <li key={ingredient} className={styles.liIngrNutrItem}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className={styles.copyrightModal}>
              Copyright © 2023 Cook Platforms, Inc.
            </p>
          </div>

          <div className={styles.nutrDiv}>
            <h1 className={styles.ingrNutrH1Mo}>
              Nutrition <hr />
            </h1>
            <div className={styles.calMealWeight}>
              <p className={styles.calorieeMo}>
                {Math.round(recipe.calories)}{" "}
                <span className={styles.spanUnder}>
                  <br />
                  CAL
                </span>
              </p>
              <p className={styles.mealType}>
                {recipe.mealType}
                <span className={styles.spanUnder}>
                  <br />
                  MEAL TYPE
                </span>
              </p>
              <p className={styles.totalWeight}>
                {Math.round(recipe.totalWeight)}{" "}
                <span className={styles.spanUnder}>
                  <br />
                  GRAMS
                </span>
              </p>
            </div>

            <p className={styles.healthLabels}>
              <hr />
              {recipe.healthLabels.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
