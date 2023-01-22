import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { AppRoutes } from "../../Routes";
export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink
        to={AppRoutes.Home}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to={AppRoutes.Users}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Users
      </NavLink>
      <NavLink
        to={AppRoutes.Post}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Post
      </NavLink>
      <NavLink
        to={AppRoutes.Todos}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Todos
      </NavLink>
    </nav>
  );
};
