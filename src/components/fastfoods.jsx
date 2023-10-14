import { useState } from "react";
import { useEffect } from "react";

const FastFoods = () => {
  const [fastFoodItems, setFastFoodItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fastFoods = async () => {
      let response = await fetch(
        "https://react-mini-projects-api.classbon.com/Fastfood/list"
      );

      if (response.status === 200) {
        const data = await response.json();
        setFastFoodItems(data);
        setError(false);
        setLoading(false);
        return;
      }
      setError(response.error);
      setLoading(false);
    };

    fastFoods();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {fastFoodItems.map((fastfood) => (
            <li key={fastfood.id}>
              <h4>{fastfood.name}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FastFoods;
