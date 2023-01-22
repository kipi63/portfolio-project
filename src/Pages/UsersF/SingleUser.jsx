import React from "react";

import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { Tabs } from "./Tabs";

import { useFetchData } from "../../components/dataFetching";
import {
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
  FaShare,
  FaBuilding,
} from "react-icons/fa";

export const SingleUser = () => {
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }, [id]);

  const {
    data: user,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/users/${id}`);
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <>
      <Tabs />
      {user && (
        <div className="user-container" key={user.id}>
          <div className="content">
            <FaEnvelope className="icon" />
            <div className="descr">
              <span className="main">{user.email}</span>
              <span className="secondary">mail</span>
            </div>
          </div>
          <div className="content">
            <FaPhone className="icon" />
            <div className="descr">
              <span className="main">{user.phone}</span>
              <span className="secondary">mobile</span>
            </div>
          </div>
          <div className="content">
            <FaLocationArrow className="icon" />
            <div className="descr">
              <span className="main">
                {user.address.city},{user.address.street},{user.address.suite}
              </span>
              <span className="secondary">work</span>
            </div>
          </div>
          <div className="content">
            <FaShare className="icon" />
            <div className="descr">
              <span className="main">{user.website}</span>
              <span className="secondary">website</span>
            </div>
          </div>
          <div className="content">
            <FaBuilding className="icon" />
            <div className="descr">
              <span className="main">
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
              </span>
              <span className="secondary">company</span>
            </div>
          </div>
        </div>
      )}

      <Link to={AppRoutes.Users}>Back to users</Link>
    </>
  );
};
