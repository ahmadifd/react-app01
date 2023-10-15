import { useReducer, useRef, useState } from "react";

export const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  tags: [],
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return { ...state, [action.data.name]: action.data.value };
    case "add_tag":
      return { ...state, tags: [...state.tags, action.data] };
    case "remove_tag":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.data),
      };
    case "increase":
      return { ...state, quantity: state.quantity + 1 };
    case "decrease":
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export const Form = () => {
  // const [product, setProduct] = useState({
  //   title: "",
  //   description: "",
  //   price: 0,
  //   category: "",
  //   tags: [],
  //   quantity: 0,
  // });
  const tagRef = useRef();
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handelInputChange = (event) => {
    dispatch({
      type: "change_input",
      data: { name: event.target.name, value: event.target.value },
    });
  };

  const handelTags = () => {
    const tags = tagRef.current.value.split(",");
    console.log(tags, tagRef.current.value);
    tags.forEach((t) => {
      dispatch({ type: "add_tag", data: t });
    });
  };

  console.log(state);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="عنوان"
          name="title"
          onChange={handelInputChange}
        />
        <input
          type="text"
          placeholder="توضیح"
          name="description"
          onChange={handelInputChange}
        />
        <input
          type="number"
          placeholder="قیمت"
          name="price"
          onChange={handelInputChange}
        />
        <p>مجموعه</p>
        <select name="category" onChange={handelInputChange}>
          <option value="bag">کیف</option>
          <option value="shoes">کفش</option>
          <option value="dress">لباس</option>
        </select>
        <p>تگ</p>
        <textarea placeholder="tags" ref={tagRef}></textarea>
        <br />
        <button type="button" onClick={handelTags}>
          انتخاب تگ
        </button>
        <br />
        {state.tags.map((tag) => {
          return (
            <button
              key={tag}
              onClick={() => dispatch({ type: "remove_tag", data: tag })}
            >
              {tag}
            </button>
          );
        })}
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={() => dispatch({ type: "increase" })}>
            +
          </button>
          تعداد {state.quantity}
          <button type="button" onClick={() => dispatch({ type: "decrease" })}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};
