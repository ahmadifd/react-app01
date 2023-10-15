import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Register = () => {
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    password: yup
      .string()
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .matches(/\d+/)
      .required(),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password")], "یکسان")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  function FormSubmit(data) {
    try {
      console.log(data);
      //schema.validate(profile, { abortEarly: false });
    } catch (error) {}
  }

  return (
    <>
      <form onSubmit={handleSubmit(FormSubmit)}>
        <label htmlFor="first_name">first_name</label>
        <input
          placeholder="first_name"
          type="text"
          className="form-control"
          id="first_name"
          {...register("first_name")}
        />
        {errors.first_name && (
          <p className="alert alert-danger">{errors.first_name?.message}</p>
        )}

        <label htmlFor="last_name">last_name</label>
        <input
          placeholder="last_name"
          type="text"
          className="form-control"
          id="last_name"
          {...register("last_name")}
        />
        {errors.last_name && (
          <p className="alert alert-danger">{errors.last_name?.message}</p>
        )}
        <label htmlFor="email">email</label>
        <input
          placeholder="email"
          type="email"
          className="form-control"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="alert alert-danger">{errors.email?.message}</p>
        )}
        <label htmlFor="password">password</label>
        <input
          placeholder="password"
          type="password"
          className="form-control"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="alert alert-danger">{errors.password?.message}</p>
        )}
        <label htmlFor="cpassword">password</label>

        <input
          placeholder="cpassword"
          type="password"
          className="form-control"
          id="cpassword"
          {...register("cpassword")}
        />
        {errors.cpassword && (
          <p className="alert alert-danger">{errors.cpassword?.message}</p>
        )}
        <button type="submit" class="mt-3 btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
};

export default Register;
