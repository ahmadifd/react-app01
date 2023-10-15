import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "./redux/store";
import { Link } from "react-router-dom";
import styles from "./CocktailList.module.css";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div>
        <span>Loading ...</span>
      </div>
    );
  }

  if (!cocktails) {
    return <h2>No Cocktails matched with your search item</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {modifiedCocktail.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <div className={styles.card} key={id}>
              <img src={image} alt={name} className={styles.card_img} />
              <div className={styles.card_body}>
                <h5 className={styles.card_title}>{name}</h5>
                <h4 className={styles.card_title}>{glass}</h4>
                <p className={styles.card_text}>{info}</p>
                <Link to={`/cocktail/${id}`}>
                  <button className={styles.btn}>Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
