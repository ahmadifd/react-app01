import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "./redux/store";
import styles from "./SingleCocktail.module.css";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  const { id  } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [id]);

  useEffect(() => {
    if (cocktail?.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstruction: instaruction,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instaruction,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, []);

  if (!modifiedCocktail) {
    return <h2>No Cocktail to Show</h2>;
  } else {
    const { name, image, category, info, glass, instaruction, ingredients } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <section className={styles.container}>
            <Link to="/">
              <button className={styles.btn}>Go Back</button>
            </Link>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.body}>
              <img src={image} alt={name} className={styles.body_img} />
              <div>
                <p>
                  <span className={styles.body_title}>Name: </span> {name}
                </p>
                <p>
                  <span className={styles.body_title}>Category: </span>{" "}
                  {category}
                </p>
                <p>
                  <span className={styles.body_title}>Info: </span> {info}
                </p>
                <p>
                  <span className={styles.body_title}>Glass: </span> {glass}
                </p>
                <p>
                  <span className={styles.body_title}>Instructions: </span>{" "}
                  {instaruction}
                </p>
                <p>
                  <span className={styles.body_title}>Ingredients: </span>
                  {ingredients &&
                    ingredients.map((item, index) => {
                      return item ? <span key={index}>{item} - </span> : null;
                    })}
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
  return (
    <div>
      <h2>Single Cocktail</h2>
    </div>
  );
};

export default SingleCocktail;
