import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import { useState } from "react";

export const Forms = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmited = (data) => {
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmited)}>
      <input
        className="input"
        type="number"
        {...register("userID", { required: true })}
      />
      <input
        className="input"
        {...register("title", { required: true, maxLength: 20 })}
        aria-invalid={errors.title ? "true" : "false"}
      />
      {errors.title?.type === "required" && (
        <p role="alert">Title is required</p>
      )}
      <input
        className="input"
        {...register("body", { required: true, maxLength: 10 })}
        aria-invalid={errors.body ? "true" : "false"}
      />
      {errors.body?.type === "required" && <p role="alert">Body is required</p>}
      <input className="submit" type="submit" />
    </form>
  );
};
