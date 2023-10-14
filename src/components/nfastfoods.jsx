import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
};

const fastFoodItemsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        fastfoodItems: action.data,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
};

const initialState = {
  fastfoodItems: [],
  loading: false,
  error: null,
};

const NFastFoods = () => {
  //debugger;
  const [state, dispatch] = useReducer(fastFoodItemsReducer, initialState);
  const { fastfoodItems, loading, error } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const fastFoods = async () => {
      let response = await fetch(
        "https://react-mini-projects-api.classbon.com/Fastfood/list"
      );

      if (response.status === 200) {
        const data = await response.json();
        dispatch({ type: ACTIONS.SUCCESS, data: data });
        return;
      }
      dispatch({ type: ACTIONS.ERROR, error: response.error });
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
          {fastfoodItems.map((fastfood) => (
            <li key={fastfood.id}>
              <h4>{fastfood.name}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NFastFoods;
