import React from "react";
import { useFetchData } from "../../../components/dataFetching";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components/Loading";

export const Todos = () => {
  const { id } = useParams();
  const {
    data: todosTab,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/users/${id}/todos`);
  if (loading) return <Loading />;
  if (error) console.log(error);
  return (
    <>
      {todosTab?.map((todo) => (
        <div key={todo.id}>
          <span className="user-id">user:{todo.userId} </span>
          <span
            className={todo.completed ? "task-text" : "task-text completed"}
          >
            {todo.title}
          </span>
        </div>
      ))}
    </>
  );
};
