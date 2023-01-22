import React from "react";
import { useFetchData } from "../../../components/dataFetching";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components/Loading";

export const Posts = () => {
  const { id } = useParams();
  const {
    data: posts,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/users/${id}/posts`);
  if (loading) return <Loading />;
  if (error) console.log(error);
  return (
    <div className="post-container">
      {posts?.map((post) => (
        <div key={post.id} className="post-content">
          <span className="user-id">user:{post.userId} </span>
          <span className="post-title"> Title : {post.title}</span>
          <span className="post-body">Body : {post.body}</span>
        </div>
      ))}
    </div>
  );
};
