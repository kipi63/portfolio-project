import React from "react";
import { useFetchData } from "../../../components/dataFetching";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components/Loading";

export const Albums = () => {
  const { id } = useParams();

  const {
    data: albums,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/users/${id}/albums`);
  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <div>
      {albums?.map((album) => (
        <div className="single-container" key={album.id}>
          <span className="user-id">user:{album.userId} </span>

          <span>{album.title}</span>
        </div>
      ))}
    </div>
  );
};
