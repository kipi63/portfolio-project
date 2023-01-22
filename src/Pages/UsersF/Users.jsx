import { Section } from "../../Section";
import "./user.scss";

import { useFetchData } from "../../components/dataFetching";
import { Link, Outlet } from "react-router-dom";
import { Loading } from "../../components/Loading";
export const Users = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/users`);
  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <>
      <Section>
        <ul className="users-container">
          {users?.map((user) => (
            <li className="user" key={user.id}>
              {user.name} <span className="username">{user.username}</span>
              <Link to={`/users/${user.id}`}>more info</Link>
            </li>
          ))}
        </ul>
      </Section>
      <Outlet />
    </>
  );
};
