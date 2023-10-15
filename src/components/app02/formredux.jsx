import { useReducer, useRef, useState } from "react";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  change_input,
  add_tag,
  remove_tag,
  increase,
  decrease,
  error,
  success,
} from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

/////////////////////////////////////////////////////////////////////////////
export const FormRedux = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.formReduxSlice);
  const { title, description, price, category, tags, quantity, errors } =
    selector;

  let schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().min(1).required(),
    category: yup.string().required(),
    tags: yup.array().min(1).required(),
    quantity: yup.number().min(1).required(),
  });
  /////////////////////////////////////////////////////////////////////////////
  const tagRef = useRef();
  //const [state, dispatch] = useReducer(formReducer, initialState);
  /////////////////////////////////////////////////////////////////////////////
  const handelInputChange = (event) => {
    dispatch(
      change_input({
        data: { name: event.target.name, value: event.target.value },
      })
    );
  };
  /////////////////////////////////////////////////////////////////////////////
  const handelTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((t) => {
      dispatch(add_tag({ data: t }));
    });
  };
  /////////////////////////////////////////////////////////////////////////////
  async function handleSubmit(event) {
    event.preventDefault();
    await validate().then(async (res) => {});
  }
  /////////////////////////////////////////////////////////////////////////////
  async function validate() {
    try {
      await schema.validate(selector, { abortEarly: false });
      dispatch(success());
      console.log("success", selector);
    } catch (er) {
      dispatch(error({ data: er.errors }));
      console.log("error", selector);
    }
  }
  /////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      {errors && errors?.length !== 0 && (
        <div className="alert alert-danger">
          {errors.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className="d-block"
          type="text"
          placeholder="عنوان"
          name="title"
          onChange={handelInputChange}
        />
        <input
          className="d-block"
          type="text"
          placeholder="توضیح"
          name="description"
          onChange={handelInputChange}
        />
        <input
          className="d-block"
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
        {tags?.map((tag) => {
          return (
            <button
              key={tag}
              onClick={() => dispatch(remove_tag({ data: tag }))}
            >
              {tag}
            </button>
          );
        })}
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={() => dispatch(increase())}>
            +
          </button>
          تعداد
          {quantity}
          <button type="button" onClick={() => dispatch(decrease())}>
            -
          </button>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};
